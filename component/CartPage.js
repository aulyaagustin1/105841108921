import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + parseFloat(item.price.replace('Rp ', '').replace('.', '').replace(',', '.'));
    }, 0).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price} - {item.time}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
          <Text style={styles.removeButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Keranjang Belanja</Text>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {calculateTotal()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eeeeee',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Metro-Bold',
    marginBottom: 20,
  },
  itemContainer: {
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
    flexDirection: 'row',
  },
  itemImage: {
    width: '30%',
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Metro-Bold',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontFamily: 'Metro-Bold',
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '90%'
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Metro-Bold',
    textAlign:'center'
  },
});

export default CartPage;
