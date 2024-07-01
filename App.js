// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const App = () => {
//     const TextInputCustom = ({name, color}) => {
//         return (
//             <TextInput placeholder={` ${name}`}
//             style={{
//                 borderColor:'gray',
//                 width:'90%',
//                 height:'64px',
//                 marginBottom:10,
//                 padding:10,
//                 color:color,
//                 backgroundColor:'white',
//                 shadowColor:'black',
//                 shadowRadius:1,
//                 shadowOpacity:0.2
//             }}
//             />
//         )
//     }

// const ButtonCustom =({color, text}) => {
//     return (
//         <View style={{
//             backgroundColor:color,
//             width:'90%',
//             height:50,
//             borderRadius:20,
//             justifyContent:'center'
//         }}>
//             <Text style={{
//                 textAlign:'center',
//                 fontSize:15,
//                 color:'white'
//             }}> {text}

//             </Text>
//         </View>
//     )
// }

// return (
//     <View style={{
//         flex:1,
//         backgroundColor:'#F5F5F5'
//     }}>
//         <View style={{
//             flex:1,
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
//             width:'100%',
//             paddingLeft:'14px',
//             top:106
//         }}>
//             <Text style={{
//                 fontSize:'34px',
//                 lineHeight:'34px',
//                 fontWeight:'bold',
//                 color:'#222222'
//             }}>Forgot Password</Text>
//         </View>

//         <View style={{
//             flex:1,
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 alignSelf:'center',
//                 padding:20,
//                 bottom:50
//             }}>Please, enteer your email addrerss. You will receive a link to create a new password via email.</Text>
//         </View>

//         <View style={{
//             flex:1,
//             width:'100%',
//             height:'64px',
//             bottom:180,
//             alignItems:'center',
//             alignSelf:'center'
//         }}>
//             <TextInputCustom name='Email' color='#666666'/>
//         </View>


//         <View style={{
//             flex:1,
//             justifyContent:'flex-end',
//             alignItems:'center',
//             bottom:500,
//             width:'100%'
//         }}>
//             <ButtonCustom color='red' text='SEND'/>
//         </View>
//         </View>
// )
// }
// export default App

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

// const App = () => {
//     const [fontsLoaded] = useFonts({
//         'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//         'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
//         'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
//         'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//         'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
//     })

//     if (!fontsLoaded) return <View>
//         <Text>Font Tidak Ditemukan</Text>
//     </View>

//     return(
//         <View style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <Text style={{
//                 fontSize: 30
//             }}>Font Biasa</Text>
//             <Text style={{
//                 fontSize: 30,
//                 fontFamily:'Metro-Bold'
//             }}>Font Metro Bold</Text>
//             <Text style={{
//                 fontSize: 30,
//                 fontFamily:'Metro-Black'
//             }}>Font Metro Black</Text>
//             <Text style={{
//                 fontSize: 30,
//                 fontFamily:'Metro-Light'
//             }}>Font Metro Light</Text>
//             <Text style={{
//                 fontSize: 30,
//                 fontFamily:'Metro-Medium'
//             }}>Font Metro Medium</Text>
//             <Text style={{
//                 fontSize: 30,
//                 fontFamily:'Metro-SemiBold'
//             }}>Font Metro Semi Bold</Text>

//         </View>
//     )
// }

// export default App

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

//     const TextInputCustom = ({name, color}) => {
//         return (
//             <TextInput placeholder={` ${name}`}
//             style={{
//                 borderColor:'gray',
//                 width:'90%',
//                 height:'64px',
//                 marginBottom:10,
//                 padding:10,
//                 color:color,
//                 backgroundColor:'white',
//                 shadowColor:'black',
//                 shadowRadius:1,
//                 shadowOpacity:0.2
//             }}
//             />
//         )
//     }

// const ButtonCustom =({color, text}) => {
//     return (
//         <View style={{
//             backgroundColor:color,
//             width:'90%',
//             height:50,
//             borderRadius:20,
//             justifyContent:'center'
//         }}>
//             <Text style={{
//                 textAlign:'center',
//                 fontSize:15,
//                 color:'white'
//             }}> {text}

//             </Text>
//         </View>
//     )
// }

// const App = () => {
//     const [fontsLoaded, fontError] = useFonts({
//         'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//         'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
//         'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
//         'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//         'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
//     })

//     if (!fontsLoaded) return <View>
//         <Text>Font Tidak Ditemukan</Text>
//     </View>
// return (
//     <View style={{
//         flex:1,
//         backgroundColor:'#F5F5F5'
//     }}>
//         <View style={{
//             flex:1,
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
//             width:'100%',
//             paddingLeft:'14px',
//             top:106
//         }}>
//             <Text style={{
//                 fontSize:'34px',
//                 lineHeight:'34px',
//                 color:'#222222',
//                 fontFamily:'Metro-Bold'
//             }}>Login</Text>
//         </View>

//         <View style={{
//             flex:1,
//             width:'100%',
//             height:'64px',
//             top:40,
//             alignItems:'center',
//             alignSelf:'center',
//             fontFamily:'Metro-Medium'
//         }}>
//             <TextInputCustom name='Email' color='#666666'/>
//             <TextInputCustom name='Password' color='#666666'/>
//         </View>

//         <View style={{
//             flex:1,
//             top:50,
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 alignSelf:'flex-end',
//                 right:30,
//                 fontFamily:'Metro-SemiBold'
//             }}>Forgot Password?</Text>
//         </View>

//         <View style={{
//             flex:1,
//             justifyContent:'flex-end',
//             alignItems:'center',
//             bottom:150,
//             width:'100%',
//             fontFamily:'Metro-Black'
//         }}>
//             <ButtonCustom color='red' text='LOGIN'/>
//         </View>

//         <View style={{
//             alignSelf:'center',
//             bottom:50
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 fontSize:14,
//                 fontFamily:'Metro-SemiBold',
//             }}>Or sign up with social account</Text>
//         </View>

//         <View style={{
//             flexDirection: 'row',
//             columnGap: 10,
//             alignSelf:'center',
//             bottom:40
//         }}>
//             <View style={{
//                 backgroundColor: 'white',
//                 borderRadius:10,
//                 padding:10
//             }}>
//                 <Image source={require('./assets/img/google.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
//             </View>

//             <View style={{
//                 backgroundColor: 'white',
//                 borderRadius:10,
//                 padding:10
//             }}>
//                 <Image source={require('./assets/img/facebook.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
//             </View>
//         </View>
            
//         </View>
// )
// }
// export default App

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

//     const TextInputCustom = ({name, color}) => {
//         return (
//             <TextInput placeholder={` ${name}`}
//             style={{
//                 borderColor:'gray',
//                 width:'90%',
//                 height:'64px',
//                 marginBottom:10,
//                 padding:10,
//                 color:color,
//                 backgroundColor:'white',
//                 shadowColor:'black',
//                 shadowRadius:1,
//                 shadowOpacity:0.2
//             }}
//             />
//         )
//     }


// const ButtonCustom =({color, text}) => {
//     return (
//         <View style={{
//             backgroundColor:color,
//             width:'90%',
//             height:50,
//             borderRadius:20,
//             justifyContent:'center'
//         }}>
//             <Text style={{
//                 textAlign:'center',
//                 fontSize:15,
//                 color:'white'
//             }}> {text}

//             </Text>
//         </View>
//     )
// }

// const App = () => {
//     const [fontsLoaded] = useFonts({
//                 'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//                 'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
//                 'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
//                 'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//                 'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
//             })
        
//             if (!fontsLoaded) return <View>
//                 <Text>Font Tidak Ditemukan</Text>
//             </View>
// return (
//     <View style={{
//         flex:1,
//         backgroundColor:'#F5F5F5'
//     }}>
//         <View style={{
//             flex:1,
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
//             width:'100%',
//             paddingLeft:'14px',
//             top:106
//         }}>
//             <Text style={{
//                 fontSize:'34px',
//                 lineHeight:'34px',
//                 fontWeight:'bold',
//                 color:'#222222',
//                 fontFamily: 'Metro-Bold'
//             }}>Sign Up</Text>
//         </View>

//         <View style={{
//             flex:1,
//             width:'100%',
//             height:'64px',
//             top:40,
//             alignItems:'center',
//             alignSelf:'center',
//             fontFamily:'Metro-Medium'
//         }}>
//             <TextInputCustom name='Name' color='#666666'/>
//             <TextInputCustom name='Email' color='#666666'/>
//             <TextInputCustom name='Password' color='#666666'/>
//         </View>

//         <View style={{
//             flex:1,
//             top:50,
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 alignSelf:'flex-end',
//                 right:30,
//                 fontFamily:'Metro-Medium'
//             }}>Already have an account?</Text>
//         </View>

//         <View style={{
//             flex:1,
//             justifyContent:'flex-end',
//             alignItems:'center',
//             bottom:150,
//             width:'100%',
//             fontFamily:'Metro-Bold'
//         }}>
//             <ButtonCustom color='red' text='SIGN UP'/>
//         </View>

//         <View style={{
//             alignSelf:'center',
//             bottom:40
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 fontSize:14,
//                 fontFamily:'Metro-Medium'
//             }}>Or sign up with social account</Text>
//         </View>

//         <View style={{
//             flexDirection: 'row',
//             columnGap: 10,
//             alignSelf:'center',
//             bottom:30
//         }}>
//             <View style={{
//                 backgroundColor: 'white',
//                 borderRadius:10,
//                 padding:10
//             }}>
//                 <Image source={require('./assets/img/google.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
//             </View>

//             <View style={{
//                 backgroundColor: 'white',
//                 borderRadius:10,
//                 padding:10
//             }}>
//                 <Image source={require('./assets/img/facebook.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
//             </View>
//         </View>
            
//         </View>
// )
// }
// export default App

// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";
// import { useFonts } from "expo-font";

// const TextInputCustom = ({name, color}) => {
//     return (
//             <TextInput placeholder={` ${name}`}
//             style={{
//                 borderColor:'gray',
//                 width:'90%',
//                 height:'64px',
//                 marginBottom:10,
//                 padding:10,
//                 color:color,
//                 backgroundColor:'white',
//                 shadowColor:'black',
//                 shadowRadius:1,
//                 shadowOpacity:0.2
//             }}
//             />
//         )
//     }
    
//     const ButtonCustom =({color, text}) => {
//         return (
//             <View style={{
//                 backgroundColor:color,
//                 width:'90%',
//                 height:50,
//                 borderRadius:20,
//                 justifyContent:'center'
//             }}>
//             <Text style={{
//                 textAlign:'center',
//                 fontSize:15,
//                 color:'white'
//             }}> {text}

//             </Text>
//         </View>
//     )
// }


//* Use Font

// const App = () => {
//     const [fontsLoaded] = useFonts({
//         'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
//         'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
//         'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
//         'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
//         'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
//         })
//         if (!fontsLoaded) return <View>
//             <Text>Font Tidak Ditemukan</Text>
//             </View>
// return (
//     <View style={{
//         flex:1,
//         backgroundColor:'#F5F5F5'
//     }}>
//         <View style={{
//             flex:1,
//             alignItems:'flex-start',
//             justifyContent:'flex-start',
//             width:'100%',
//             paddingLeft:'14px',
//             top:106
//         }}>
//             <Text style={{
//                 fontSize:'34px',
//                 lineHeight:'34px',
//                 fontFamily:'Metro-Bold',
//                 color:'#222222'
//             }}>Forgot Password</Text>
//         </View>

//         <View style={{
//             flex:1,
//         }}>
//             <Text style={{
//                 color:'#222222',
//                 alignSelf:'center',
//                 padding:20,
//                 bottom:10,
//                 fontFamily:'Metro-Medium'
//             }}>Please, enteer your email addrerss. You will receive a link to create a new password via email.</Text>
//         </View>

//         <View style={{
//             flex:1,
//             width:'100%',
//             height:'64px',
//             bottom:100,
//             alignItems:'center',
//             alignSelf:'center',
//             fontFamily:'Metro-Medium'
//         }}>
//             <TextInputCustom name='Email' color='#666666'/>
//         </View>

//         <View style={{
//             flex:1,
//             justifyContent:'flex-end',
//             alignItems:'center',
//             bottom:270,
//             width:'100%',
//             fontFamily:'Metro-SemiBold'
//         }}>
//             <ButtonCustom color='red' text='SEND'/>
//         </View>
//         </View>
// )
// }
// export default App

//* Navigation dan Taksbar

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './assets/component/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/img/homeAktf.jpg';
import HomeTdkAktif from './assets/img/homeNon.jpg';
import shopAktif from './assets/img/shopAktf.jpg';
import shopTdkAktif from './assets/img/shopNon.jpg';
import { Image } from 'react-native';

// Navigation Bagian 1 
// const Tab = createBottomTabNavigator();
// function MyTabs() {
//     return (~
//         <Tab.Navigator>
//             <Tab.Screen
//             options = {{
//                 headerShown: false,
//             }}
//             name = "Home" component = {HomeScreen}/>
//             <Tab.Screen name = "Login" component = {LoginPage}/>
//             </Tab.Navigator>
//     );
// }

// function HomeScreen({ navigation }) {
//     return (
//         <View style = {{ 
//             flex: 1, 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             }}>
//             <Text style = {{
//                 bottom:30,
//                 fontSize:30,
//                 fontWeight:'bold'
                
//             }}> Home Screen</Text>
//             <Button
//             title = 'Go To Login'
//             onPress = {() => navigation.navigate('Login')}/>
//         </View>
//     );
// }
// const Stack = createNativeStackNavigator();
// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                <Stack.Screen name = 'Home' component = {MyTabs}/>
//                </Stack.Navigator>
//                </NavigationContainer>
//     );
// }
// export default App;

// Navigation Bagian 2
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home" 
            component={HomeScreen}
            options = {{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image
                    source = {focused ? HomeAktif : HomeTdkAktif}
                    style = {{ width: 40, height: 40 }}
                 />
              ),
            }}
         />
            <Tab.Screen
            name = "Login"
            component = {LoginPage}
            options = {{
                tabBarIcon: ({focused}) => (
                    <Image
                    source = { focused ? shopAktif : shopTdkAktif }
                    style = {{ width: 40, height: 40 }}
                 />
               ),
            }}
         />
            </Tab.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
             title = 'Go To Login'
             onPress = {() => navigation.navigate('Login')}
                />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Home' component = {MyTabs}/>
                <Stack.Screen name = 'Login' component = {LoginPage}/>
                </Stack.Navigator>
                </NavigationContainer>
    );
}

export default App;