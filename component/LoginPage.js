import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

    const TextInputCustom = ({name, color}) => {
        return (
            <TextInput placeholder={` ${name}`}
            style={{
                borderColor:'gray',
                width:'90%',
                height:64,
                marginBottom:10,
                padding:10,
                color:color,
                backgroundColor:'white',
                shadowColor:'black',
                shadowRadius:1,
                shadowOpacity:0.2,
                fontFamily:'Metro-Medium'
            }}
            />
        )
    }

const ButtonCustom =({color, text}) => {
    return (
        <View style={{
            backgroundColor:color,
            width:'90%',
            height:50,
            borderRadius:20,
            justifyContent:'center'
        }}>
            <Text style={{
                textAlign:'center',
                fontSize:15,
                color:'white',
                fontFamily:'Metro-Bold'
            }}> {text}

            </Text>
        </View>
    )
}

const Login = ({navigation}) => {
    const [fontLoaded] = useFonts({
        'Metro-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Metro-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
    })
    if (!fontLoaded) return <View>
        <Text>Loading../assets.</Text>
    </View>
return (
    <View style={{
        flex:1,
        backgroundColor:'#F5F5F5'
    }}>
        <View style={{
            flex:1,
            alignItems:'flex-start',
            justifyContent:'flex-start',
            width:'100%',
            paddingLeft:14,
            top:30,
        }}>
            <Text style={{
                fontSize:34,
                lineHeight:34,
                color:'#222222',
                fontFamily:'Metro-Bold'
            }}>Login</Text>
        </View>

        <View style={{
            flex:1,
            width:'100%',
            height:64,
            top:30,
            alignItems:'center',
            alignSelf:'center',
            minHeight:200
        }}>
            <TextInputCustom name='Email' color='#666666'/>
            <TextInputCustom name='Password' color='#666666'/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}
            style={{
                flex:1,
                bottom:20,
            }}>
        
            <Text style={{
                color:'#222222',
                alignSelf:'flex-end',
                right:25,
                fontSize:15,
                fontFamily:'Metro-Medium',
            }}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{
            justifyContent:'flex-end',
            alignItems:'center',
            bottom:50,
            width:'100%',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('myTabs')}  style={{
                width:'90%',
                height:50,
                backgroundColor:'red',
                borderRadius:20,
                justifyContent:'center',
            }}>
           <Text style={{
                textAlign:'center',
                fontSize:15,
                color:'white',
                fontFamily:'Metro-Bold'
           }}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}
            style={{
                flex:1,
                bottom:30,
            }}>
        
            <Text style={{
                color:'#222222',
                alignSelf:'center',
                fontSize:15,
                fontFamily:'Metro-Medium',
            }}>Don't ready have an account?</Text>
        </TouchableOpacity>

        <View style={{
            alignSelf:'center',
            bottom:35
        }}>
            <Text style={{
                color:'#222222',
                fontSize:14,
                fontFamily:'Metro-Medium'
            }}>Or sign up with social account</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            columnGap: 10,
            alignSelf:'center',
            bottom:20
        }}>
            <View style={{
                backgroundColor: 'white',
                borderRadius:10,
                padding:10
            }}>
                <Image source={require('../assets/img/google.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
            </View>

            <View style={{
                backgroundColor: 'white',
                borderRadius:10,
                padding:10
            }}>
                <Image source={require('../assets/img/facebook.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
            </View>
        </View>
            
        </View>
)
}
export default Login

