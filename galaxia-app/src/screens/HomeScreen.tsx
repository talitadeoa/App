// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // coloque a imagem em src/assets/background.jpg
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Universo do App</Text>

      {/* Círculo 1 – vai pra AtomoScreen */}
      <TouchableOpacity
        style={[styles.circle, styles.circleAtomo]}
        onPress={() => navigation.navigate('Atomo')}
      >
        <Text style={styles.circleText}>Átomo</Text>
      </TouchableOpacity>

      {/* Círculo 2 – vai pra SpaceScreen */}
      <TouchableOpacity
        style={[styles.circle, styles.circleSpace]}
        onPress={() => navigation.navigate('Space')}
      >
        <Text style={styles.circleText}>Espaço</Text>
      </TouchableOpacity>

      {/* Círculo 3 – exemplo de outro destino ou futuro recurso */}
      <TouchableOpacity
        style={[styles.circle, styles.circleExtra]}
        onPress={() => {
          // futuramente: outra tela
          console.log('Círculo extra clicado');
        }}
      >
        <Text style={styles.circleText}>Outro</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const CIRCLE_SIZE = 90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 60,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    textShadowColor: '#00000090',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  circle: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffcc',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  circleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
  // Aqui você controla as posições dos círculos 👇
  circleAtomo: {
    top: 180,
    left: 40,
  },
  circleSpace: {
    top: 320,
    right: 40,
  },
  circleExtra: {
    bottom: 80,
    left: '50%',
    marginLeft: -CIRCLE_SIZE / 2,
  },
});

export default HomeScreen;
