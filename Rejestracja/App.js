import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from "./components/Screen1"
import Screen2 from "./components/Screen2"
import Screen3 from "./components/Screen3"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='s1' component={Screen1} options={{
          title: 'registering...',
          headerStyle: { backgroundColor: '#339966' },
          headerTintColor: '#ffffff'
        }} />
        <Stack.Screen name='s2' component={Screen2} options={{
          title: 'registered users',
          headerStyle: { backgroundColor: '#339966' },
          headerTintColor: '#ffffff'
        }} />
        <Stack.Screen name='s3' component={Screen3} options={{
          title: 'specific user data',
          headerStyle: { backgroundColor: '#339966' },
          headerTintColor: '#ffffff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;