import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen';
import ShowContent from '../ShowContent';
import AllNews from '../AllNews';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();
// here we are creating a screen option style
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};
// here we are creating Stack navigator  for the home screen
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
        //  daynamic title
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};
// here we are creating Stack navigator  for the all news screen
// and we are passing the screen option style as a prop to the Stack navigator
// and the screen option style is the screen option style we created above

const ALlNews = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="news" component={AllNews} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ALlNews};
