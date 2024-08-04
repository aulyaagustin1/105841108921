import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './component/HomePage';
import SignUpPage from './component/SignUpPage';
import LoginPage from './component/LoginPage';
import ForgotPasswordPage from './component/ForgotPasswordPage';
import myTabs from './component/myTabs';
import FavoritesPage from './component/FavoritesPage';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='myTabs' screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="aulyaFood" component={HomePage} />
        <Stack.Screen name="Signup" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="myTabs" component={myTabs} />
        <Stack.Screen name="FavoritesPage" component={FavoritesPage} />
      </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;