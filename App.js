/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View style={{height: 200, width: 200, backgroundColor: 'red'}}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
