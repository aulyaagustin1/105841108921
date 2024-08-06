import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mimi Headline</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Popular</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Trending</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Today</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Content</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Favourite</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Download</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Language</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Darkmode</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionItemText}>Only Download via Wifi</Text>
          <Icon name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF6F61',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  iconButton: {
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF6F61',
  },
  editProfileButton: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionItemText: {
    fontSize: 16,
  },
});

export default ProfilePage;
