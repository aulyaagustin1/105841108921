import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import FavoritesPage from '../component/FavoritesPage';
import ListCart from '../component/screen/CartScreen';
import ProfilePage from '../component/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function myTabs() {
  return (
      <Tab.Navigator 
      screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
              let iconName;

              if (route.name === 'Beranda') {
                  iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Favorit') {
                  iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Detail') {
                  iconName = focused ? 'reader' : 'reader-outline';
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
      })} >

        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen name="Favorit" component={FavoritesPage} />
        <Tab.Screen name="Detail" component={ListCart} options={{title: 'Detail Pesanan'}} />
        <Tab.Screen name="Profil" component={ProfilePage} />
      </Tab.Navigator>
  );
}

export default myTabs;