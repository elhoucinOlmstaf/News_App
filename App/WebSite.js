import {
  Button,
  Linking,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const WebSite = () => {
  const {height} = useWindowDimensions();
  // here we are going to use the Linking module to open the url in the browser
  // and we are passing the url to the Linking module
  //
  function goToSite() {
    Linking.openURL('https:turkistankelbety.kz');
  }
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: height / 2,
        }}>
        <Button title="Vesite US" onPress={() => goToSite()} />
      </View>
    </SafeAreaView>
  );
};

export default WebSite;
