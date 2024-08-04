import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const HomePage = () => {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        'Metro-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Metro-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
        'Metro-Light': require('../assets/fonts/Metropolis-Light.otf'),
    })
    if (!fontLoaded) return <View>
        <Text>Loading../assets.</Text>
    </View>

    return (
        <ImageBackground source={require('../assets/img/hero-signup.png')} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 20,
        }}>

            <View>
                <Image source={require('../assets/img/linear.png')} style={{
                    width: '150%',
                    resizeMode: 'stretch',
                    top: 250,
                    alignSelf: 'center',
                }} />

                <Text style={{
                    fontSize: 24,
                    color: 'white',
                    marginBottom: 10,
                    bottom: 100,
                    fontFamily: 'Metro-Bold',
                }}>
                    aulyaFood, Pilih Lauk Sesukamu dengan lebih mudah!
                </Text>
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    marginBottom: 30,
                    bottom: 100,
                    fontFamily: 'Metro-Light',
                    width: '70%',
                }}>
                    Pesan langsung dari ponselmu, lebih cepat dan praktis
                </Text>

                <TouchableOpacity style={{
                    backgroundColor: '#4CAF50',
                    padding: 15,
                    alignItems: 'center',
                    borderRadius: 10,
                    bottom: 100,
                }}
                onPress={() => navigation.navigate('Signup')}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Metro-Bold',
                    }}>Daftar Sekarang</Text>
                </TouchableOpacity>

                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    marginTop: 10,
                    bottom: 100,
                    alignSelf: 'center',
                    fontFamily: 'Metro-Medium',
                    fontSize: 12,
                }}>
                    Sudah Punya Akun?
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{
                            color: '#4CAF50',
                        }}> Masuk</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ImageBackground>
    )
}

export default HomePage;