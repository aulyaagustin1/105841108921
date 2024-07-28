import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

const CartScreen = () => {
    const data = [
        {
            id: '1',
            title: 'Indomie Telur Spesial',
            price: 'Rp 20K',
            qunatity: '5',
            image: require('../../assets/img/food/indomie-goreng.png')
        }
    ];

    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
        }}>
            <Image source={item.image} style={{
                width:50,
                height:50,
            }} />

            <View style={{flex:1, marginLeft:10}}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{marginHorizontal:10}}>{item.quantity}</Text>
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                    <TouchableOpacity>
                        <Text>Hapus</Text>
                    </TouchableOpacity>
        </View>
        );

        return (
            <View style={{
                flex: 1,
                padding: 20,
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>
                    Keranjang
                    </Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <Text>Jumlah Item: 15 Item</Text>
                    <Text>Total Pesanan : Rp. 150K</Text>
                </View>

                <TouchableOpacity style={{
                    backgroundColor:'green',
                    padding: 15,
                    borderRadius: 5,
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                    }}>Pesan Sekarang</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export default CartScreen;