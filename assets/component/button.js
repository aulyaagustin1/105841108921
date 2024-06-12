import React from "react";
import { View, Text } from "react-native";

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

export default ButtonCustom;