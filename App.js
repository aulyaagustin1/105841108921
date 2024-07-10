import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './assets/component/Login';
import SignUpPage from './assets/component/SignUp';
import ForgotPasswordPage from './assets/component/ForgotPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/img/HomeAktif.jpg';
import HomeNonAktif from './assets/img/HomeNon.jpg';
import ShopAktif from './assets/img/ShopAktif.jpg';
import ShopNonAktif from './assets/img/ShopNon.jpg';

const Tab = createBottomTabNavigator();
function HomeScreen({navigation}){
      return (
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text style={{
            fontSize:19,
            padding:15,
            fontFamily:'Metro-Black',
          }}>Home Screen</Text>
      
          <TouchableOpacity
          style={{
            padding:10,
            marginBottom:10,
            borderRadius:5,
            alignItems:'center',

          }} 
          onPress={() => navigation.navigate('Login')}>
            <Text style={{
              color:'black',
              fontFamily:'Metro-Bold',
              fontSize:25,
              letterSpacing:1
            }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )
      }

function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

<Tab.Screen name="Login" component={LoginPage}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

<Tab.Screen name="SignUp" component={SignUpPage}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />
<Tab.Screen name="ForgotPassword" component={ForgotPasswordPage}
      options={{
        headerShown:false, tabBarIcon:({focused}) => (
        <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
      )
    }}
    />

    
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App