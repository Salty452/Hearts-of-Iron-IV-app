import React from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.smallTitle}>STRATEŠKI VODNIK</Text>

      <Text style={styles.title}>HEARTS OF IRON IV</Text>

      <Text style={styles.subtitle}>
        Zgodovina. Strategija. Odločitve.
      </Text>

      <Image
        source={{
          uri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.heading}>Kaj je Hearts of Iron IV?</Text>

      <Text style={styles.paragraph}>
        Hearts of Iron IV je strateška računalniška igra, ki se dogaja
        v obdobju druge svetovne vojne. Igralec izbere državo in
        odloča o njenem gospodarstvu, raziskovanju, diplomaciji
        in vojaški strategiji.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>ŽANR</Text>
        <Text style={styles.value}>Strateškae igra</Text>

        <Text style={styles.label}>RAZVIJALEC</Text>
        <Text style={styles.value}>Paradox Development Studio</Text>

        <Text style={styles.label}>LETO IZDAJE</Text>
        <Text style={styles.value}>2016</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/game')}
      >
        <Text style={styles.buttonText}>SPOZNAJ IGRO →</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push('/about')}
      >
        <Text style={styles.buttonText}>O MENI</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171b18',
    padding: 20,
  },
  smallTitle: {
    color: '#a4b58a',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 45,
  },
  title: {
    color: '#f0f0e8',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 10,
  },
  subtitle: {
    color: '#b7bdb2',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 22,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  paragraph: {
    color: '#c4c9c0',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#252c25',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    color: '#a4b58a',
    fontSize: 15,
    marginTop: 4,
  },
  value: {
    color: '#f0f0e8',
    fontSize: 15,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#a4b58a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#3c7e3c',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#171b18',
    fontWeight: 'bold',
  },
});