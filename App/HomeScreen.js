import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import Animation from './Animation/Animation';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const scrollViewRef = createRef();
  const [isLoading, setIsLoading] = useState(false);

  // here we select the index of the news item that the user is on
  const SelctedIndex = event => {
    const ViewSize = event.nativeEvent.layoutMeasurement.width;
    const ContentOffset = event.nativeEvent.contentOffset.x;
    const selctedIndex = Math.floor(ContentOffset / ViewSize);
    setCurrentIndex(selctedIndex);
  };

  /// here we are getting the news from the server
  // and we are setting the news to the state
  // and we are also setting the loading state to true
  // and we are also setting the current index to 0
  const fetchData = () => {
    try {
      fetch('https://turkistankelbety.kz/wp-json/wp/v2/posts?_embed')
        .then(res => res.json())
        .then(items => {
          if (items.length) {
            setUsers(items);
            setIsLoading(true);
          }
        });
    } catch (err) {
      alert(err);
    }
  };
  // here we navigate to the news detail page
  // and we are passing the news detail to the news detail page
  const navigateToShowContent = item => {
    navigation.navigate('ShowContent', {
      Id: item.id,
      Data: item,
      Img: item._embedded['wp:featuredmedia'][0].source_url,
    });
  };
  // now we are getting the news detail from the server while the user
  // is on the news detail page and when he navigates back to the news list page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      {/* here checking if the the state if loading is false then we show animation
          because the date is not loaded yet.
          if the state is loading then we show the news list
      */}

      {isLoading == false ? (
        <View style={{marginTop: -120}}>
          <Animation />
          <View style={{marginTop: 0, alignItems: 'center'}}>
            <Text style={{fontSize: 29, fontWeight: 'bold'}}>Loading...</Text>
          </View>
        </View>
      ) : (
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            onMomentumScrollEnd={SelctedIndex}
            ref={scrollViewRef}>
            {users.map((item, index) => (
              <TouchableOpacity onPress={() => navigateToShowContent(item)}>
                <View key={index} style={{width: width, height: 200}}>
                  <Image
                    source={{
                      uri: item._embedded['wp:featuredmedia'][0].source_url,
                    }}
                    style={{width: width, height: 200}}
                  />
                  <View style={styles.headerTitlecontainer}>
                    <Text style={styles.headerTitle}>
                      {item.title.rendered}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.dotsContainer}>
            {users.map((Image, index) => (
              <View
                key={index}
                style={[
                  styles.dots.backgroundColor,
                  {opacity: currentIndex === index ? 0.5 : 1},
                ]}></View>
            ))}
          </View>
          {/* here we are showing the news in FlatList */}
          <FlatList
            data={users}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => navigateToShowContent(item)}>
                <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
                  <Image
                    source={{
                      uri: item._embedded['wp:featuredmedia'][0].source_url,
                    }}
                    style={{width: 110, height: 110}}
                  />
                  <View
                    style={{
                      backgroundColor: '#fff',
                      width: 250,
                      marginLeft: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        flexWrap: 'wrap',
                        textAlign: 'left',
                      }}>
                      {item.title.rendered}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerTitlecontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.6,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dotsContainer: {
    position: 'absolute',
    top: 180,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 5,
  },
});

export default HomeScreen;
