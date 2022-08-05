import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  Share,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import AnimationWithImperativeApi from './Animation/Animation';
import Animation from './Animation/Animation';
import {useRoute} from '@react-navigation/native';

const ShowContent = ({route, navigation}) => {
  const Route = useRoute();

  const ID = route.params.Id;
  const Data = route.params.Data;
  const Img = route.params.Img;
  const {width} = useWindowDimensions();
  const [Loading, setLoading] = useState(false);
  // now we are getting the news detail from the server
  //while the user is on the news detail page and when he navigates back to the news list page
  // and we are setting the news detail to the state
  // and we are also setting the loading state to true
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const getContent = () => {
    if (ID === Data.id) {
      return (
        <ScrollView>
          <RenderHtml
            contentWidth={width}
            source={{
              html: `
              <div style="font-size: 20px; marginLeft:10px ;  line-height:33px;">
                <img src="${Img}" style="width:100%;" />
                <p >${Data.content.rendered}</p>
              </div>
              `,
            }}
          />
          <Button title="share" onPress={() => onShare()} />
        </ScrollView>
      );
    }
  };
  // getContent();
  useEffect(() => {
    getContent();
    setTimeout(() => {
      setLoading(true);
    }, 700);
  }, []);

  return (
    <View>
      {Loading ? (
        <View>{getContent()}</View>
      ) : (
        <View>
          <Animation />
          <View style={{marginTop: 170, alignItems: 'center'}}>
            <Text style={{fontSize: 29, fontWeight: 'bold'}}>Loading...</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ShowContent;
