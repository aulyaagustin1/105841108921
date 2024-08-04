import { useFonts } from "expo-font";
import React from 'react';
import { View, Text } from 'react-native';

const FontStyle = () => {
    const [loaded] = useFonts({
        MetroBold : require('../assets/fonts/Metropolis-Bold.otf'),
        MetroMedium : require('../assets/fonts/Metropolis-Medium.otf'),
    });

    if (!loaded) 
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }


export default FontStyle