import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './App/Navigations/Drawer';
function App() {
  // here we are hiding the splash screen
  // when the app is loaded
  // we are using the react-native-splash-screen
  // library to hide the splash screen
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    //here we are using the navigation container
    //to wrap the whole app
    //and we are passing the drawer navigator as a prop to the navigation container to wrap the whole app
    //and the drawer navigator is the navigation container we created in the App/Navigations/Drawer.js
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
