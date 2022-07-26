import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainStackNavigator, ALlNews} from '../Navigations/AppStack';

const Tab = createBottomTabNavigator();
// here we are creating a tab navigator for the app stack navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route }) => ({
        // here we are setting the icon for each tab
        // and we are checking the route name to set the icon
        // and we are setting the title for each tab
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
