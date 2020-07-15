import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../../i18n/i18n';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  renderStartButton() {
    return (
      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={() => {
          setInterval(() => {
            const { time } = this.state;
            this.setState({
              time: time + 1000,
            });
          }, 1000);
        }}>
        <Text style={styles.mainActionButtonText}>{i18n.START}</Text>
      </TouchableOpacity>
    );
  }

  renderRunningTimer() {
    const { time } = this.state;
    return (
      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={() => console.log('Button Pressed')}>
        <Text style={styles.mainActionButtonText}>
          <Text>{time}</Text>
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { time } = this.state;
    return (
      <View style={styles.homeViewContainer}>
        <View style={styles.welcomeHeaderContainer}>
          <Text style={styles.welcomeHeader}>{i18n.WELCOME_HEADER}</Text>
        </View>
        <View style={styles.mainActionButtonContainer}>
          {time > 0 ? this.renderRunningTimer() : this.renderStartButton()}
        </View>
      </View>
    );
  }
}

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
