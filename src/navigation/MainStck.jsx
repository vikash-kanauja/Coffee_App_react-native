import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/main/Landing';
import Main from '../screens/main/Main';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false, headerTitle: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false, headerTitle: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
