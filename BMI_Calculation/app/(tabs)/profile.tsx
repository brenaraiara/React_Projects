// app/tabs/profile.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Text style={styles.subtitle}>Aqui estão suas informações:</Text>
      
      {/* Exemplo de dados do perfil */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome: João da Silva</Text>
        <Text style={styles.infoText}>Email: joao@example.com</Text>
        <Text style={styles.infoText}>Idade: 30 anos</Text>
      </View>
      
      <Button title="Editar Perfil" onPress={() => { /* Ação de edição do perfil */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});

export default ProfileScreen;
