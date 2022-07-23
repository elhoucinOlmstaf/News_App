import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';

const Contact = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 22, color: 'blue', marginTop: 30}}>Свяжитесь с нами</Text>
      <Text style={{fontSize: 22, textAlign: 'center', marginTop: 10}}>
        Здравствуйте Уважаемый пользователь. пожалуйста, если вы столкнулись с
        какой-либо проблемой во время использования нашего приложения или у вас
        есть идеи по улучшению нашего приложения, пожалуйста, свяжитесь с нами
        по электронной почте.
      </Text>
      <Text style={{fontSize: 22, color: 'red', margin: 10}}>
        info@turkistankelbety.kz
      </Text>
    </View>
  );
};

export default Contact;
