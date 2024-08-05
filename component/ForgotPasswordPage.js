import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const ForgotPasswordPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Lupa Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi Baru"
          secureTextEntry
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Atur Ulang Kata Sandi</Text>
        </TouchableOpacity>
        <Text style={styles.backToLogin} onPress={() => navigation.navigate('Login')}>
          Kembali ke Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6347',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backToLogin: {
    textAlign: 'center',
    color: '#ff6347',
    marginTop: 10,
  },
});

export default ForgotPasswordPage;
