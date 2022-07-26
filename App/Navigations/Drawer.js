import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {ALlNews} from './AppStack';
import BottomTabNavigator from './TabNav';
import WebSite from '../WebSite';
import PrivacyPolicy from '../PrivacyPolicy';
import Contact from '../Contact';
import CustomSidebarMenu from './CustomSidebarMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
// here we are creating a drawer navigator for the app stack navigator
// and we are passing the drawer navigator as a prop to the navigation container to wrap the whole app
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {fontSize: 18, marginLeft: -20},
        drawerInactiveBackgroundColor: '#fff',
        drawerActiveBackgroundColor: '#00a8ff',
        drawerActiveTintColor: '#fff',
      }}
      // her we are creating  drawer content for the app stack navigator
      // and we are passing the drawer content as a prop to the drawer navigator to wrap the whole app
      // and the drawer content is the drawer content we created in the CustomSidebarMenu.js
      
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          title: 'Басты бет',
        }}
      />
      <Drawer.Screen
        name="AlNews"
        component={ALlNews}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="newspaper" color={color} size={size} />
          ),
          title: 'Барлық жаңалықтар',
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
          title: 'Байланыс',
        }}
      />
      <Drawer.Screen
        name="Visit Us"
        component={WebSite}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="web" color={color} size={size} />
          ),
          title: 'Біздің сайт',
        }}
      />
      <Drawer.Screen
        name="Provicy Policy"
        component={PrivacyPolicy}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="file-contract" color={color} size={size} />
          ),
          title: 'Пайдаланушылық келісім',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
