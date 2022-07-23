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
