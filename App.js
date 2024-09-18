import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando Ionicons para ícones
import backgroundImage from './assets/background.png';

export default function App() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);


  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };

  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confirmar</Text>
      </View>

      <View style={styles.belowHeaderContainer}>
        <Text style={styles.belowHeaderText}>Samuel</Text>


        <TouchableOpacity onPress={toggleExpand1} style={styles.textContainer}>
          <Text style={styles.upperText}>Giovanna</Text>
          <Text style={styles.lowerText}>13:00 - 18:50</Text>
          {expanded1 && (
            <View style={styles.expandedContent}>
              <Text style={styles.iconText}>Ida:</Text>
              <View style={styles.iconRow}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark-circle-outline" size={32} color="green" />
                  <Text>Vai</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Ionicons name="close-circle-outline" size={32} color="red" />
                  <Text>Não vai</Text>
                </View>
              </View>

              <Text style={styles.iconText}>Volta:</Text>
              <View style={styles.iconRow}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark-circle-outline" size={32} color="green" />
                  <Text>Aprovar</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Ionicons name="close-circle-outline" size={32} color="red" />
                  <Text>Rejeitar</Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleExpand2} style={styles.textContainer}>
          <Text style={styles.upperText}>Iasmin</Text>
          <Text style={styles.lowerText}>13:00 - 18:50</Text>


          {expanded2 && (
            <View style={styles.expandedContent}>
              <Text style={styles.iconText}>Ida:</Text>
              <View style={styles.iconRow}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark-circle-outline" size={32} color="green" />
                  <Text>Vai</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Ionicons name="close-circle-outline" size={32} color="red" />
                  <Text>Não vai</Text>
                </View>
              </View>

              <Text style={styles.iconText}>Volta:</Text>
              <View style={styles.iconRow}>
                <View style={styles.iconContainer}>
                  <Ionicons name="checkmark-circle-outline" size={32} color="green" />
                  <Text>Vai</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Ionicons name="close-circle-outline" size={32} color="red" />
                  <Text>Não vai</Text>
                </View>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 110,
    backgroundColor: '#EFEDED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 58,
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  belowHeaderContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    top: 40,
  },
  belowHeaderText: {
    color: '#000',
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  upperText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 3,
    marginLeft: 10,
  },
  lowerText: {
    fontSize: 14,
    color: '#000',
    marginTop: 3,
    marginLeft: 10,
  },
  expandedContent: {
    marginTop: 10,
    backgroundColor: '#FFF', // Mesma cor do container
    padding: 10,
    borderRadius: 10,
    width: '100%', // Mesma largura do container
    alignItems: 'flex-start',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
