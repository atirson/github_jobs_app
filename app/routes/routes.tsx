import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '@cuteapp/screens/Home';
import Details from '@cuteapp/screens/Details';
import {theme} from '@cuteapp/constants/theme';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }

            // You can return any component that you like here!
            return (
              <Ionicons name={iconName || 'home'} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: theme.colors.opposity,
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.secondary,
            borderTopColor: theme.colors.secondary,
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
