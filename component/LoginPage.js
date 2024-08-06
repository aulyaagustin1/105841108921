import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/aulya.webp')} style={styles.image} />
      <View style={styles.formContainer}>
        <View style={styles.toggleButtons}>
          <TouchableOpacity style={[styles.toggleButton, styles.activeButton]}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry />
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate ('MyTabs')}>
          <Text style={styles.submitButtonText}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>T</Text>
          </TouchableOpacity>
        </View>
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
    width: '50%',
    height: 150,
    borderRadius:30
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
  forgotPassword: {
    textAlign: 'center',
    color: '#ff6347',
    marginTop: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
