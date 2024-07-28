import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const data = [
    {
      id: '1',
      title: 'Indomie Goreng Spesial',
      price: 'Rp 20.500',
      time: '30 menit',
      image: require('../assets/img/food/indomie-goreng.png')
    },
    
    {
      id: '2',
      title: 'Sate Ayam',
      price: 'Rp 30.000',
      time: '30 menit',
      image: require('../assets/img/food/sate.jpg')
    },
    
    {
      id: '3',
      title: 'Sate',
      price: 'Rp 20.500',
      time: '30 menit',
      image: require('../assets/img/food/indomie-goreng.png')
    }
  ];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

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
  }

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
        borderRadius: 10,
      }} />
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      }}>{item.title}</Text>
      <Text style={{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
      }}>{item.price}</Text>
      <Text style={{
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      }}>{item.time}</Text>
      <TouchableOpacity style={{
        backgroundColor:'#4CAF50',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
      }}
      onPress={() => navigation.navigate('Cart')}>
        <Text style={{
          color: '#fff',
          fontSize: 16,
        }}>Tambah</Text>
      </TouchableOpacity>
    </View>
    );

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Cari Lauk untuk Makanan!
      </Text>
      <TextInput 
      placeholder='Cari lauk...' 
      value={searchQuery}
      onChangeText={handleSearch}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 20,
      }} />
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