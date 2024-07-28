import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './ProfilePage';
import HomeAktif from '../assets/img/icon-tabs/homeAktif.png';
import HomeNon from '../assets/img/icon-tabs/home.png';
import ShopAktif from '../assets/img/icon-tabs/shopAktif.png';
import ShopNon from '../assets/img/icon-tabs/shop.png';
import FavoritesAktif from '../assets/img/icon-tabs/favoritesAktif.png';
import FavoritesNon from '../assets/img/icon-tabs/favorites.png';
import BagAktif from '../assets/img/icon-tabs/bagAktif.png';
import BagNon from '../assets/img/icon-tabs/bag.png';
import ProfilAktif from '../assets/img/icon-tabs/profileAktif.png';
import ProfilNon from '../assets/img/icon-tabs/profile.png';

const Tab = createBottomTabNavigator();

const myTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Image source={focused ? HomeAktif : HomeNon} style={{width: 30, height: 30}}/>
            ),
        }}/>
        <Tab.Screen name="Shop" component={ShopPage} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Image source={focused ? ShopAktif : ShopNon} style={{width: 30, height: 30}}/>
            ),
        }}/>
        <Tab.Screen name="Bag" component={BagPage} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Image source={focused ? BagAktif : BagNon} style={{width: 30, height: 30}}/>
            ),
        }}/>
        <Tab.Screen name="Favorites" component={FavoritesPage} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Image source={focused ? FavoritesAktif : FavoritesNon} style={{width: 30, height: 30}}/>
            ),
        }}/>
        <Tab.Screen name="Profil" component={ProfilePage} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Image source={focused ? ProfilAktif : ProfilNon} style={{width: 30, height: 30}}/>
            ),
        }}/>

    </Tab.Navigator>
  )
}

export default myTabs