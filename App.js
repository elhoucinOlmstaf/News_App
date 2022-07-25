import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import DrawerNavigator from './App/Navigations/Drawer';

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
