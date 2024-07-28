import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/img/hero-signup.png')} style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 20,
        }}>

            <View style={{
                padding: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10,
            }}>
                <Text style={{
                    fontSize: 24,
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}>
                    aulyaFood, Pilih Lauk Sesukamu dengan lebih mudah!
                </Text>
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    marginBottom: 20,
                }}>
                    Pesan langsung dari ponselmu, lebih cepat dan praktis
                </Text>

                <TouchableOpacity style={{
                    backgroundColor: '#4CAF50',
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                }}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>Daftar Sekarang</Text>
                </TouchableOpacity>

                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    marginTop: 10,
                }}>
                    Sudah Punya Akun?
                </Text>

                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 10,
                }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        color: '#222222',
                        fontSize: 16,
                    }}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default HomePage;