import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import FavoritesPage from '../component/FavoritesPage';
import CartPage from '../component/CartPage';
import ProfilePage from '../component/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs({ cart, favorites, addToCart, removeFromCart, addToFavorites }) {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorit') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Keranjang') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#F5F5F5',
          borderTopColor: 'transparent',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          padding: 30,
          alignContent: 'center',
        }
      })}>
      <Tab.Screen name="Beranda">
        {props => <HomeScreen {...props} addToCart={addToCart} addToFavorites={addToFavorites} favorites={favorites} cart={cart} />}
      </Tab.Screen>
      <Tab.Screen name="Favorit">
        {props => <FavoritesPage {...props} favorites={favorites} addToFavorites={addToFavorites} />}
      </Tab.Screen>
      <Tab.Screen name="Keranjang">
        {props => <CartPage {...props} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
      </Tab.Screen>
      <Tab.Screen name="Profil" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default MyTabs;
