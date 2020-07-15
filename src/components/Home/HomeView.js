import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  startTimer = () => {
    setInterval(() => {
      const { time, paused } = this.state;
      if (!paused) {
        this.setState({
          time: time + 1000,
        });
      }
    }, 1000);
  };

  pauseTimer = () => {
    const { paused } = this.state;
    this.setState({
      paused: !paused,
    });
  };

  render() {
    const { time } = this.state;
    return (
      <View style={styles.homeViewContainer}>
        <View style={styles.welcomeHeaderContainer}>
          <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
        </View>
        <View style={styles.mainActionButtonContainer}>
          <StopWatchButton
            time={time}
            startOnPressAction={this.startTimer}
            timerOnPressAction={this.pauseTimer}
          />
        </View>
      </View>
    );
  }
}

export default HomeView;

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
});
