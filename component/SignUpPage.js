import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <View style={styles.formContainer}>
        <View style={styles.toggleButtons}>
          <TouchableOpacity style={styles.toggleButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.toggleButton, styles.activeButton]}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Nama Depan" autoCapitalize="words" />
        <TextInput style={styles.input} placeholder="Nama Belakang" autoCapitalize="words" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Daftar</Text>
        </TouchableOpacity>
        <Text style={styles.alreadyMember} onPress={() => navigation.navigate('Login')}>Sudah punya akun? Masuk</Text>
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
  toggleButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeButton: {
    borderColor: '#ff6347',
  },
  buttonText: {
    color: '#ff6347',
    fontWeight: 'bold',
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
  alreadyMember: {
    textAlign: 'center',
    color: '#ff6347',
    marginTop: 10,
  },
});

export default SignUpPage;
