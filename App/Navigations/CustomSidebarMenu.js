import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('../../App/asset/Images/AppLogo.png')}
        style={styles.sideMenuProfileIcon}
      />
     
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 17,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.turkistankelbety.kz
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 110,
    height: 110,
    borderRadius: 70,
    alignSelf: 'center',
    margin: 10,
    marginTop: 30,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
