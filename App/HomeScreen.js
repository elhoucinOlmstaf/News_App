import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import Animation from './Animation/Animation';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const {navigate} = useNavigation();
  const {width, height} = Dimensions.get('window');
  const scrollViewRef = createRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //const time ()=>{}
  const SelctedIndex = event => {
    const ViewSize = event.nativeEvent.layoutMeasurement.width;
    const ContentOffset = event.nativeEvent.contentOffset.x;
    const selctedIndex = Math.floor(ContentOffset / ViewSize);
    setCurrentIndex(selctedIndex);
  };

  /// I am fethcing data
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
  // navigate to ShowContent
  const navigateToShowContent = item => {
    navigation.navigate('ShowContent', {
      Id: item.id,
      Data: item,
      Img: item._embedded['wp:featuredmedia'][0].source_url,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
                  <View
                    style={{
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
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 17,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      {item.title.rendered}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              top: 180,
              height: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            {users.map((Image, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  margin: 5,
                  opacity: currentIndex === index ? 0.5 : 1,
                }}>
                {/* <Text>hhh</Text> */}
              </View>
            ))}
          </View>

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

export default HomeScreen;
