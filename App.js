import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeView from './src/components/Home/HomeView';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <HomeView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
