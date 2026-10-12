import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.smallTitle}>AVTOR APLIKACIJE</Text>
          <Text style={styles.title}>O MENI</Text>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>NIKO</Text>
            <Text style={styles.profileText}>ZIJAN</Text>
          </View>

          <Text style={styles.heading}>Živjo!</Text>
          <Text style={styles.paragraph}>
            Sem avtor te aplikacije, obiskujem Šolski center Velenje 
            in sicer program računalniški tehnik.
            Za svoj projekt sem izbral računalniško igro 
            Hearts of Iron IV, ki spada med strateške video igre.
          </Text>

          <Text style={styles.heading}>Zakaj sem ustvaril aplikacijo?</Text>
          <Text style={styles.paragraph}>
            Želel sem predstaviti svojo najljubšo igro, njene glavne
            značilnosti in način igranja. Aplikacija je namenjena vsem,
            ki želijo izvedeti nekaj več o igri Hearts of Iron IV.
          </Text>

          <Text style={styles.heading}>Kaj sem se naučil?</Text>
          <Text style={styles.paragraph}>
            Pri izdelavi sem spoznal osnove razvoja mobilnih aplikacij
            z uporabo React Native in Expo. Naučil sem se tudi, kako
            ustvariti več strani, dodati slike in povezati strani
            z navigacijo.
          </Text>

          <View style={styles.card}>
            <Text style={styles.label}>AVTOR</Text>
            <Text style={styles.value}>Niko Zijan</Text>

            <Text style={styles.label}>TEMA PROJEKTA</Text>
            <Text style={styles.value}>Hearts of Iron IV</Text>

            <Text style={styles.label}>UPORABLJENA TEHNOLOGIJA</Text>
            <Text style={styles.value}>React Native, Expo in TypeScript</Text>
          </View>

          <Text style={styles.footer}>
            Hvala za ogled moje aplikacije!
          </Text>
        </ScrollView>
    )   
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
    profileCircle: {
      width: 110,
      height: 110,
      borderRadius: 55,
      backgroundColor: '#a4b58a',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: 25,
    },
    profileText: {
      color: '#171b18',
      fontSize: 25,
      fontWeight: '900',
    },
    heading: {
      color: '#f0f0e8',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 10,
    },
    paragraph: {
      color: '#c4c9c0',
      fontSize: 15,
      lineHeight: 24,
      marginBottom: 15,
    },
    card: {
      backgroundColor: '#252c25',
      borderRadius: 10,
      padding: 16,
      marginTop: 10,
      marginBottom: 20,
    },
    label: {
      color: '#a4b58a',
      fontSize: 11,
      fontWeight: 'bold',
      marginTop: 10,
    },
    value: {
      color: '#f0f0e8',
      fontSize: 15,
      marginTop: 4,
    },
    footer: {
      color: '#a4b58a',
      textAlign: 'center',
      marginBottom: 35,
      fontSize: 14,
    },
});