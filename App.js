import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const App = () => {
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
                fontWeight:'bold',
                color:'#222222'
            }}>Sign Up</Text>
        </View>

        <View style={{
            flex:1,
            width:'100%',
            height:'64px',
            top:40,
            alignItems:'center',
            alignSelf:'center'
        }}>
            <TextInputCustom name='Name' color='#666666'/>
            <TextInputCustom name='Email' color='#666666'/>
            <TextInputCustom name='Password' color='#666666'/>
        </View>

        <View style={{
            flex:1,
            top:50,
        }}>
            <Text style={{
                color:'#222222',
                alignSelf:'flex-end',
                right:30
            }}>Already have an account?</Text>
        </View>

        <View style={{
            flex:1,
            justifyContent:'flex-end',
            alignItems:'center',
            bottom:300,
            width:'100%'
        }}>
            <ButtonCustom color='red' text='SIGN UP'/>
        </View>

        <View style={{
            alignSelf:'center',
            bottom:150
        }}>
            <Text style={{
                color:'#222222',
                fontSize:14,
            }}>Or sign up with social account</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            columnGap: 10,
            alignSelf:'center',
            bottom:140
        }}>
            <View style={{
                backgroundColor: 'white',
                borderRadius:10,
                padding:10
            }}>
                <Image source={require('./assets/img/google.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
            </View>

            <View style={{
                backgroundColor: 'white',
                borderRadius:10,
                padding:10
            }}>
                <Image source={require('./assets/img/facebook.png')} style={{width:30, height:30, resizeMode:'contain'}}/>
            </View>
        </View>
            
        </View>
)
}
export default App