import {
  Button,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const PrivacyPolicy = () => {
  const { height} = useWindowDimensions();
  function goToPrivacy() {
    Linking.openURL('https://turkistankelbety.kz/privacy-policy/');
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
        <Button title="Show Privacy" onPress={() => goToPrivacy()} />
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
