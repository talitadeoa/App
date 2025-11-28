// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import AtomoScreen from './src/screens/AtomoScreen';
import SpaceScreen from './src/screens/SpaceScreen';

export type RootStackParamList = {
  Home: undefined;
  Atomo: undefined;
  Space: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Atomo" component={AtomoScreen} />
        <Stack.Screen name="Space" component={SpaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
