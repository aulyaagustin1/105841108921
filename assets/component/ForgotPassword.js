import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
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

const ForgotPasswordPage = () => {
    
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
            top:50
            
        }}>
            <Text style={{
                fontSize:'34px',
                lineHeight:'34px',
                fontFamily:'Metro-Bold',
                color:'#222222',
                fontFamily:'Metro-Bold'
            }}>Forgot Password</Text>
        </View>

        <View style={{
            flex:1,
        }}>
            <Text style={{
                color:'#222222',
                alignSelf:'center',
                padding:20,
                bottom:90,
                fontFamily:'Metro-Medium'
            }}>Please, enteer your email addrerss. You will receive a link to create a new password via email.</Text>
        </View>

        <View style={{
            flex:1,
            width:'100%',
            height:64,
            bottom:190,
            alignItems:'center',
            alignSelf:'center',
            minHeight:200,
        }}>
            <TextInputCustom name='Email' color='#666666'/>
        </View>


        <View style={{
            justifyContent:'flex-end',
            alignItems:'center',
            bottom:280,
            width:'100%',
        }}>
            <ButtonCustom color='red' text='SEND'/>
        </View>
        </View>
)
}
export default ForgotPasswordPage