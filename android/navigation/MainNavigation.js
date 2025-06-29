import { createStackNavigator, Header } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/home';
import Profile from '../screens/Profile/Profile';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ Header: () => null, headerShown: false }}
      initialRouteName={Routes.Home}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
