import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen';
import ShowContent from '../ShowContent';
import AllNews from '../AllNews';
import {Button, View} from 'react-native';
import WebSite from '../WebSite';

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};
const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Басты меню',
          headerLeft: () => (
            <View
              style={{
                backgroundColor: '#fff',
                width: 40,
                hieght: 10,
                marginLeft: -10,
                marginTop: 2,
              }}>
              <Icon
                size={35}
                color="#000"
                name="menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ShowContent"
        component={ShowContent}
        options={{title: null}}
      />
    </Stack.Navigator>
  );
};

const ALlNews = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="news" component={AllNews} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ALlNews};
