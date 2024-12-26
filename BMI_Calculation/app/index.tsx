import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import Title from './(tabs)/home';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },


})

export default HomeScreen;
