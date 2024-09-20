import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/main/Main';

const HomeStackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
    {/* Home screen with product list */}
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: 'Product List' }}
    />
    
    {/* Product Details screen */}
   {/* <Stack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={{ title: 'Product Details' }}
    />
    
    {/* Another nested screen */}
    {/*<Stack.Screen
      name="AdditionalInfo"
      component={AdditionalInfoScreen}
      options={{ title: 'Additional Info' }}
    />*/}
  </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})