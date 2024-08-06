import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoritesPage = ({ favorites, addToFavorites }) => {
  const renderItem = ({ item }) => (
    <View style={{
      marginBottom: 20,
      backgroundColor: '#f9f9f9',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    }}>
      <Image source={item.image} style={{
        width: '100%',
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
      }} />
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      }}>{item.title}</Text>
      
      <Text style={{
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      }}>
        {item.price} - {item.time}
      </Text>
      <Text style={{
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      }}>
        {item.description}
      </Text>

      <TouchableOpacity style={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}
      onPress={() => addToFavorites(item)} >
        <Icon name="heart" size={24} color="red" style={{ padding: 15 }} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: '#eeeeee',
    }}>
      <Text style={{
        fontSize: 24,
        fontFamily: 'Metro-Bold',
        marginBottom: 20,
      }}>
        Daftar Favorit
      </Text>

      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
}

export default FavoritesPage;
