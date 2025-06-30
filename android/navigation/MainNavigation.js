import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Routes } from './Routes';
import Home from '../screens/Home/home';
import Profile from '../screens/Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabProfile/ProfileTabFile';
import ProfileTabContent from '../components/ProfiletabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is tab 3</Text>
    </View>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0, // remove sombra no Android
          zIndex: 0, // mantém em camada inferior
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent', // remove o indicador
        },
      }}
    >
      <ProfileTabs.Screen
        name="Tab1"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Photos'} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name="Tab2"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Videos'} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name="Tab3"
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title={'Saved'} />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // ✅ esconde o cabeçalho para todas as telas
        gestureEnabled: true, // reativa o gesto de swipe para voltar
      }}
    >
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
