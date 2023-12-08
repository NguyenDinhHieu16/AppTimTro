import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import MainNavigation from './src/Navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation></MainNavigation>
    </NavigationContainer>
  );
}
