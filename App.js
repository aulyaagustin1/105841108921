import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import SignupPage from './component/SignUpPage';
import LoginPage from './component/LoginPage';
import ForgotPasswordPage from './component/ForgotPasswordPage';
import MyTabs from './component/myTabs';
import FavoritesPage from './component/FavoritesPage';
import CartPage from './component/CartPage';
import ProfilePage from './component/ProfilePage';


const Stack = createStackNavigator();

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(fav => fav.id === item.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== item.id);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} addToCart={addToCart} addToFavorites={addToFavorites} favorites={favorites} cart={cart} />}
        </Stack.Screen>
        <Stack.Screen name="MyTabs">
          {props => <MyTabs {...props} cart={cart} favorites={favorites} addToCart={addToCart} removeFromCart={removeFromCart} addToFavorites={addToFavorites} />}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {props => <FavoritesPage {...props} favorites={favorites} addToFavorites={addToFavorites} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => <CartPage {...props} cart={cart} removeFromCart={removeFromCart} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
