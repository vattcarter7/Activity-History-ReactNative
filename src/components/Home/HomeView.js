import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../../i18n/i18n';

const HomeView = () => {
  return (
    <View style={styles.homeViewContainer}>
      <View style={styles.welcomeHeaderContainer}>
        <Text style={styles.welcomeHeader}>{i18n.WELCOME_HEADER}</Text>
      </View>
      <View style={styles.mainActionButtonContainer}>
        <TouchableOpacity
          style={styles.mainActionButton}
          onPress={() => console.log('Button Pressed')}>
          <Text style={styles.mainActionButtonText}>{i18n.START}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeViewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  mainActionButtonContainer: {
    flex: 2,
  },
  welcomeHeaderContainer: {
    flex: 1,
  },
  welcomeHeader: {
    flex: 1,
    marginTop: 50,
    textAlign: 'center',
    fontSize: 40,
    color: '#000',
  },
  mainActionButton: {
    width: 284,
    height: 284,
    borderRadius: 142,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CD5E',
  },
  mainActionButtonText: {
    fontSize: 60,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default HomeView;
