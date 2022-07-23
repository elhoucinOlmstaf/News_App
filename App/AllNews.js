import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';

const AllNews = ({navigation}) => {
  const {width, height} = useWindowDimensions('window');
  //Get All News
  const [News, setNews] = useState('');
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
  // navigate to ShowContent
  const navigateToShowContent = item => {
    navigation.navigate('ShowContent', {
      Id: item.id,
      Data: item,
      Img: item._embedded['wp:featuredmedia'][0].source_url,
    });
  };
  useEffect(() => {
    AllNews();
  }, []);

  return (
    <View>
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
                  style={{
                    width: width - 20,
                    height: height / 3.5,
                    alignSelf: 'center',
                    margin: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    flexWrap: 'wrap',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginBottom: 10,
                    marginTop: 15,
                  }}>
                  {item.title.rendered}
                </Text>
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
                  <Text style={{color: 'blue'}}>Read more >> </Text>
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

const styles = StyleSheet.create({});
