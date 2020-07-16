import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import i18n from '../../i18n/i18n';
import StopWatchButton from '../StopWatchButton/StopWatchButton';

class HomeView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: 0,
  //   };
  // }

  state = {
    time: 0,
  };

  handleAppStateChange = async (nextAppState) => {
    const now = new Date().getTime();
    const { time, paused } = this.state;
    const readTime = parseInt(await AsyncStorage.getItem('@time'));
    const readStateChangeTimestamp = parseInt(
      await AsyncStorage.getItem('@appStateChangeTimestamp'),
    );
    const timeDifference = now - readStateChangeTimestamp;
    const newTime = readTime + timeDifference;

    if (nextAppState === 'active') {
      const isPaused = await AsyncStorage.getItem('@isPaused');
      const wasPaused = isPaused && isPaused === 'true';
      let newState = {
        paused: wasPaused,
        time: parseInt(readTime, 10),
      };

      if (!wasPaused) {
        newState.time = newTime;
      }
      this.setState(newState, this.startTimer);
    } else {
      await AsyncStorage.setItem(
        '@isPaused',
        paused === true ? 'true' : 'false',
      );
      await AsyncStorage.setItem('@time', JSON.stringify(time));
      await AsyncStorage.setItem(
        '@appStateChangeTimestamp',
        JSON.stringify(now),
      );
    }
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  startTimer = () => {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
    this.timerIntervalId = setInterval(() => {
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
    const { time, paused } = this.state;
    return (
      <View style={styles.homeViewContainer}>
        <View style={styles.welcomeHeaderContainer}>
          <Text style={styles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
        </View>
        <View style={styles.mainActionButtonContainer}>
          <StopWatchButton
            paused={paused}
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
