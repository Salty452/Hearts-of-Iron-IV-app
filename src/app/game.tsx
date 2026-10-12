import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native';

export default function GameScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.smallTitle}>PODROBEN OPIS</Text>
            <Text style={styles.title}>O IGRI</Text>

            <Image
              source={{
                uri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/library_hero.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />

            <Text style={styles.heading}>Kaj je Hearts of Iron IV?</Text>
            <Text style={styles.paragraph}>
                Hearts of Iron IV je strateška računalniška igra razvijalca
                Paradox Development Studio. Igra se dogaja v obdobju druge
                svetovne vojne. Igralec prevzame vodenje države in poskuša
                doseči svoje cilje z načrtovanjem in sprejemanjem odločitev.
            </Text>

            <Text style={styles.heading}>Kako poteka igranje?</Text>
            <Text style={styles.paragraph}>
                 V igri moraš skrbeti za gospodarstvo, proizvodnjo opreme,
                raziskovanje novih tehnologij in odnose z drugimi državami.
                Pomembno je tudi načrtovanje vojaških enot in obramba
                ozemlja. Za uspeh moraš dobro premisliti o svojih potezah.
            </Text>

            <Image
              source={{
              uri: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/394360/header.jpg',
              }}
              style={styles.secondImage}
              resizeMode="cover"
            />
            
            <Text style={styles.heading}>Kaj lahko počneš v igri?</Text>

            <View style={styles.card}>
              <Text style={styles.listItem}>
                • Izbereš državo, ki jo želiš voditi.
              </Text>
              <Text style={styles.listItem}>
                • Razvijaš industrijo in gospodarstvo.
              </Text>
              <Text style={styles.listItem}>
                • Sodeluješ z drugimi državami.
              </Text>
              <Text style={styles.listItem}>
                • Načrtuješ strategije in premike enot.
              </Text>
            </View>

            <Text style={styles.heading}>Zakaj sem izbral to igro?</Text>
            <Text style={styles.paragraph}>
                Igro sem izbral, ker združuje zgodovino, strategijo in
                načrtovanje. Všeč mi je, da lahko preizkušam različne
                načine igranja in da moje odločitve vplivajo na potek igre.
            </Text>

            <Text style={styles.note}>
                Slike so uporabljene za predstavitev računalniške igre.
            </Text>
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
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 10,
      marginBottom: 20,
    },
    secondImage: {
      width: '100%',
      height: 160,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    heading: {
      color: '#f0f0e8',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 10,
    },
    paragraph: {
      color: '#c4c9c0',
      fontSize: 15,
      lineHeight: 24,
      marginBottom: 18,
    },
    card: {
      backgroundColor: '#252c25',
      borderRadius: 10,
      padding: 16,
      marginBottom: 20,
    },
    listItem: {
      color: '#f0f0e8',
      fontSize: 14,
      lineHeight: 25,
    },
    note: {
      color: '#b7bdb2',
      fontSize: 12,
      marginBottom: 30,
    },
});