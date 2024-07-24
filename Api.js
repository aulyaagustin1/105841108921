// <!-- import * as React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from './component/Login';
// import SignUpPage from './component/SignUp';
// import ForgotPasswordPage from './component/ForgotPassword';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeAktif from './assets/img/HomeAktif.jpg';
// import HomeNonAktif from './assets/img/HomeNon.jpg';
// import ShopAktif from './assets/img/ShopAktif.jpg';
// import ShopNonAktif from './assets/img/ShopNon.jpg';
// import shopPage from './component/shopPage';
// import { useFonts } from 'expo-font';

// const Tab = createBottomTabNavigator();

// function MyTabs(){
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Login" component={LoginPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? HomeAktif : HomeNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

// <Tab.Screen name="Shop" component={shopPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

// <Tab.Screen name="SignUp" component={SignUpPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />
// <Tab.Screen name="ForgotPassword" component={ForgotPasswordPage}
//       options={{
//         headerShown:false, tabBarIcon:({focused}) => (
//         <Image source={focused ? ShopAktif : ShopNonAktif} style={{width:30, height:30}} />
//       )
//     }}
//     />

    
//     </Tab.Navigator>
//   )
// }


// const Stack = createNativeStackNavigator();
// function App() {
//   const [fontLoaded] = useFonts({
//     'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//     'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//   })
//   if (!fontLoaded) {
//     return <View>
//       <Text>Loading../assets.</Text>
//     </View>
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={MyTabs} />
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
//         <Stack.Screen name="Shop" component={shopPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App -->

// <!-- import { StyleSheet, Text, View, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { Button } from 'react-native-web'
// const App = () => {
//   const [formLogin, setForm] = useState({
//     email: '',
//     password: ''
//   })
//   const onSubmit = () => {
//     if (formLogin.email === 'aul' && formLogin.password === 'aa') {
//       alert('Login Berhasil')
//     } else {
//       alert('Login Gagal')
//     }
//   }
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Form Login</Text>
//       <View>
//         <Text>Email</Text>
//         <TextInput
//           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//           onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
//           value={formLogin.email}
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//           onChangeText={(text) => setForm({ ...formLogin, password: text })}
//           value={formLogin.password}
//         />
//         <View style={{ marginTop: 10 }}>
//           <Button title="Login" onPress={onSubmit} />
//         </View>
//         <View>
//           <Text>Email: {formLogin.email}</Text>
//           <Text>Password: {formLogin.password}</Text>
//         </View>
//       </View>
//     </View>
//   )
// }
// export default App -->