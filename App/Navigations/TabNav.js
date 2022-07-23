import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainStackNavigator, ALlNews} from '../Navigations/AppStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Басты бет') {
            iconName = 'home';
          } else if (route.name === 'Барлық ') {
            iconName = 'newspaper';
          }
          return (
            <Icon
              size={24}
              color={focused ? '#00a8ff' : 'black'}
              name={iconName}
            />
          );
        },
        headerShown: false,
        // tabBarStyle: {display: route.name === 'ShowContent' ? 'none' : 'flex'},
      })}
      tabBarOptions={{
        activeTintColor: '#DE3163',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="Басты бет"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Барлық " component={ALlNews} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
