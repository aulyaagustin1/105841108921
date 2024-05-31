import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
    return (
        <View style={{flex:1}}>
            <View style={{   
                backgroundColor: '#E5E4E2',
                top: 0,
                bottom: 0,
                height: 60,
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize:30,
                    color: 'green',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    aulyaStore
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                top: '10%'
            }}>
                <Image source={require('./assets/cat.jpeg')} style={{
                    height: '100%',
                    width: '80%',
                    resizeMode: 'contain',
                }} />
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <View style={{
                    backgroundColor: 'blue',
                    height: 60,
                    width: 120,
                    justifyContent: 'center',
                    borderRadius: 10,
                    bottom: 40,
                    right: 10
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}> 
                    Login 
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'green',
                    height: 60,
                    width: 120,
                    justifyContent: 'center',
                    borderRadius: 10,
                    bottom: 40,
                    left: 10
                
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}> 
                    Register 
                    </Text>
                </View>
            </View>
        </View>

    );
}

export default App;