import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './component/myTabs';
import SignUpPage from './component/SignUpPage';
import LoginPage from './component/LoginPage';
import ForgotPasswordPage from './component/ForgotPasswordPage';
import ShopPage from './component/ShopPage';
import FavoritesPage from './component/FavoritesPage';
import HomeScreen from './component/HomeScreen';
import BagPage from './component/BagPage';
import CartScreen from './component/screen/CartScreen';
import HomePage from './component/HomePage';

const primaryColor = '#fff';
const darkRed = '#8B0000';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='aulyaFood'
      screenOptions={{
        headerStyle: {
          backgroundColor: primaryColor,
        },
        headerTintColor: darkRed,
        headerTitleStyle: {
          fontWeight: 'bold',
        }    
      }}
        >
        <Stack.Screen name='Login' component={LoginPage} options={{headerShown:false}}
        />
        <Stack.Screen name='aulyaStore' component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name='aulyaFood' component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={SignUpPage} options={{headerShown:false}}/>
        <Stack.Screen name='Shop'component={ShopPage} options={{headerShown:false}}/>
        <Stack.Screen name='Favorites' component={FavoritesPage} options={{headerShown:false}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Bag' component={BagPage} options={{headerShown:false}}/>
        <Stack.Screen name='Cart' component={CartScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;