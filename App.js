import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabScreen from './src/screens/BottomTabScreen';
import Status from './src/screens/Status';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabScreen"
          component={BottomTabScreen} />
        <Stack.Screen name="Status"
          component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
