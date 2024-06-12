import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
    const ButtonCustom = ({color, text}) => {
    return (
            <View style={{   
                backgroundColor: color,
                width: 90,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize:20,
                    color: 'white',
                    textAlign: 'center',
                }}>
                </Text>{text}
                </View>
            )
          }
          return (  
            <View style={{
                flex: 1,
                backgroundColor: 'black'
            }}>
             <View>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    top: 50,
                    bottom: 0,
                    color: 'yellow'
            }}>
                aulyaStore
              </Text>
              </View>

            <View style={{
                flex: 1,
                top: 100,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('./assets/img/cat.jpeg')} 
                style={{
                    width:200,
                    height:200,
                    resizeMode:'contain'
                }}  />
            </View> 

            <View style= {{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 80
            }}>
                <View style= {{
                    flex: 1,
                    width: 80,
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 25,
                    flexDirection: 'row',
                    columnGap: 20,
                    textAlign: 'center',
                    bottom:200
        
            }}>
                <ButtonCustom color= 'green' text= 'Login'/>
                <ButtonCustom color= 'blue' text= 'Sign Up'/>
          
                </View>
            </View>
        </View>
          )
        }
        
export default App;
                

    