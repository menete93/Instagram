import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Routes } from './Routes';
import Home from '../screens/Home/home';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ Header: () => null, headerShown: true }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ Header: () => null, headerShown: false }}
      initialRouteName={'Drawer'}
    >
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
