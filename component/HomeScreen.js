import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const data = [
    {
      id: '1',
      title: 'Strawberry Cake',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/1.jpeg')
    },
    
    {
      id: '2',
      title: 'Grilled Buttermilk Chicken',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 30.000',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/2.jpeg')
    },
    
    {
      id: '3',
      title: 'Salad',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/3.jpeg')
    },

    { 
      id: '4',
      title: 'Toast',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/4.jpeg')
    },
    { 
      id: '5',
      title: 'Bakso Urat',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/5.jpeg')
    },
    { 
      id: '6',
      title: 'Pancakes',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/6.jpeg')
    },
    { 
      id: '7',
      title: 'Risol Sayur',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/7.jpeg')
    },
    { 
      id: '8',
      title: 'Roti Pide',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/8.jpeg')
    },
    { 
      id: '9',
      title: 'Spaghetti Carbonara',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/9.jpeg')
    },
    { 
      id: '10',
      title: 'Risol Mayo',
      description: 'Merupakan menu indomie goreng yang paling banyak dipesan',
      price: 'Rp 20.500',
      time: '30 menit',
      rating: 4.5,
      image: require('../assets/img/food/10.jpeg')
    },

  ];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const newData = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
    navigation.navigate('Favorit', {...favorites, item});
  };


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
      
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 5,
      }}>
        <Icon name="star" size={16} color="#FFD700" />
        <Icon name="star" size={16} color="#FFD700" />
        <Icon name="star" size={16} color="#FFD700" />
        <Icon name="star" size={16} color="#FFD700" />
        <Icon name="star-half" size={16} color="#FFD700" />
        <Text style={{
          marginLeft: 5,
          fontSize: 14,
          color: '#666',
        }}>{item.rating}</Text>
      </View>
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

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity style={{
        flex : 1,
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
      }} onPress={() => navigation.navigate('Detail')} >
        <Text style={{
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Metro-Bold',
        }}>Tambah</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={{
      position: 'absolute',
      top: 10,
      right: 10,
    }}
    onPress={() => addToFavorites(item)} >
      <Icon name="heart-outline" size={24} color="#FF0000" />
    </TouchableOpacity>
    </View>
  )

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    }}>
      <Text style={{
        fontSize: 24,
        fontFamily: 'Metro-Bold',
        marginBottom: 20,
      }}>
        Cari Lauk untuk Makananmu!
      </Text>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
      }}>
        <Icon name="search" size={24} color="#666" />
        <TextInput 
        placeholder="Cari Lauk" 
        value={searchQuery}
        onChangeText={handleSearch} 
        style={{
          flex: 1,
          marginLeft: 10,
          padding: 10,
        }} />
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

    </View>
  )
}

export default HomeScreen