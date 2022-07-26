import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const AllNews = ({navigation}) => {
  // state for the news list data and the news list data is fetched from the server using the API call
  const [News, setNews] = useState('');
  // here we are getting the all news from the server
  // and we are setting the news to the state
  const AllNews = () => {
    try {
      fetch('https://turkistankelbety.kz/wp-json/wp/v2/posts?_embed')
        .then(res => res.json())
        .then(News => {
          setNews(News);
        });
    } catch (error) {
      alert(error);
    }
  };
  // here we are navigating to the news detail page
  // and we are passing the news id as a prop to the news detail page
  // and the news id is the id of the news
  const navigateToShowContent = item => {
    navigation.navigate('ShowContent', {
      Id: item.id,
      Data: item,
      Img: item._embedded['wp:featuredmedia'][0].source_url,
    });
  };
  // here we are using the useEffect hook to get the news
  useEffect(() => {
    AllNews();
  }, []);

  return (
    <View>
      {/* here we are using FlatList to list all the new that are coming from the API */}
      <FlatList
        data={News}
        renderItem={({item}) => (
          <View style={{backgroundColor: '#fff', width: '100%'}}>
            <TouchableOpacity onPress={() => navigateToShowContent(item)}>
              <View>
                <Image
                  source={{
                    uri: item._embedded['wp:featuredmedia'][0].source_url,
                  }}
                  style={styles.imageStyle}
                />
                <Text style={styles.title}>{item.title.rendered}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    size={17}
                    color="gray"
                    name="calendar"
                    style={{marginLeft: 10}}
                  />
                  <Text style={{marginLeft: 10, marginBottom: 10}}>
                    {item._embedded['wp:featuredmedia'][0].date}
                  </Text>
                </View>
                <View style={{marginTop: -30}}>
                  <RenderHtml
                    contentWidth={width - 10}
                    source={{
                      html: `<p style="color: purple; font-size: 1.2rem; marginLeft:10px ;">
                    <span style="text-align: left; text-decoration-line: underline;">
                      ${item.excerpt.rendered}
                    </span>
                  </p>`,
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={{marginLeft: 10, marginBottom: 40, marginTop: -20}}
                  onPress={() => navigateToShowContent(item)}>
                  <Text style={{color: 'blue'}}>Read more </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={index =>
          new Date().getTime().toString() +
          Math.floor(
            Math.random() * Math.floor(new Date().getTime()),
          ).toString()
        }
      />
    </View>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  imageStyle: {
    width: width - 20,
    height: height / 3.5,
    alignSelf: 'center',
    margin: 10,
  },
  title: {
    fontSize: 22,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
  },
});
