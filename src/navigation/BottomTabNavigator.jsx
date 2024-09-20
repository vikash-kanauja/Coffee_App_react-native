import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Favourite from '../screens/tabs/Favourite';
import AddToCart from '../screens/tabs/AddToCart';
import Notification from '../screens/tabs/Notification';
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator >
    <Tab.Screen
      name="HOME"
      component={Home}
      options={{
        tabBarLabel: 'Search',
        headerShown: false,
        headerTitle: false,
        tabBarIcon: ({color, size}) => (
          <Octicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="FAVOURITE "
      component={Favourite}
      options={{
        tabBarLabel: 'Search',
        headerShown: false,
        headerTitle: false,
        tabBarIcon: ({color, size}) => (
          <Fontisto name="heart-alt" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ADDTOCART"
      component={AddToCart}
      options={{
        tabBarLabel: 'Search',
        headerShown: false,
        headerTitle: false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="shopping-bag" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="NOTIFICATION"
      component={Notification}
      options={{
        tabBarLabel: 'Search',
        headerShown: false,
        headerTitle: false,
        tabBarIcon: ({color, size}) => (
          <Octicons name="bell" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
