import {View, Text, ScrollView, Image, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderHtml from 'react-native-render-html';
import AnimationWithImperativeApi from './Animation/Animation';
import Animation from './Animation/Animation';
import {useRoute} from '@react-navigation/native';

const ShowContent = ({route, navigation}) => {
  const Route = useRoute();
  console.log(Route.name);

  const ID = route.params.Id;
  const Data = route.params.Data;
  const Img = route.params.Img;
  const {width} = useWindowDimensions();
  const [Loading, setLoading] = useState(false);

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
        getContent()
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
