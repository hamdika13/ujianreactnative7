/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/Home/Home'
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Login from './Screen/Login/Login';
import Dashboard from './Screen/Dashboard/Dashboard';
import CheckIn from './Screen/CheckIn/CheckIn';
import Ijin from './Screen/Ijin/Ijin';
import HistoryAbsen from './Screen/HistoryAbsen/HistoryAbsen'
import CheckOut from './Screen/CheckOut/CheckOut';
import Selfie from './Screen/Selfie/Selfie'







const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
     <Stack.Screen name = "Login" component = {Login}/>
     <Stack.Screen name = "Dashboard" component = {Dashboard}/>
     <Stack.Screen name = "CheckIn" component = {CheckIn}/> 
     <Stack.Screen name = "CheckOut" component = {CheckOut}/>
     <Stack.Screen name = "Ijin" component = {Ijin}/>
     <Stack.Screen name = "HistoryAbsen" component = {HistoryAbsen}/>
     <Stack.Screen name = "Selfie" component = {Selfie}/>
    </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
  </>
  )
}

export default App;

