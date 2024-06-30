import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const TextInputCustom = ({name, color}) => {
    return (
            <TextInput placeholder={` ${name}`}
            style={{
                borderColor:'gray',
                width:'90%',
                height:'64px',
                marginBottom:10,
                padding:10,
                color:color,
                backgroundColor:'white',
                shadowColor:'black',
                shadowRadius:1,
                shadowOpacity:0.2
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
                color:'white'
            }}> {text}

            </Text>
        </View>
    )
}

const App = () => {
    const [fontsLoaded] = useFonts({
        'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
        'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
        'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
        'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
        'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
        })
        if (!fontsLoaded) return <View>
            <Text>Font Tidak Ditemukan</Text>
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
            paddingLeft:'14px',
            top:106
        }}>
            <Text style={{
                fontSize:'34px',
                lineHeight:'34px',
                fontFamily:'Metro-Bold',
                color:'#222222'
            }}>Forgot Password</Text>
        </View>

        <View style={{
            flex:1,
        }}>
            <Text style={{
                color:'#222222',
                alignSelf:'center',
                padding:20,
                bottom:10,
                fontFamily:'Metro-Medium'
            }}>Please, enteer your email addrerss. You will receive a link to create a new password via email.</Text>
        </View>

        <View style={{
            flex:1,
            width:'100%',
            height:'64px',
            bottom:100,
            alignItems:'center',
            alignSelf:'center',
            fontFamily:'Metro-Medium'
        }}>
            <TextInputCustom name='Email' color='#666666'/>
        </View>


        <View style={{
            flex:1,
            justifyContent:'flex-end',
            alignItems:'center',
            bottom:270,
            width:'100%',
            fontFamily:'Metro-SemiBold'
        }}>
            <ButtonCustom color='red' text='SEND'/>
        </View>
        </View>
)
}
export default App