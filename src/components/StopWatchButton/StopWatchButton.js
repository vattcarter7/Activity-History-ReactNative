import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

import i18n from '../../i18n/i18n';
import moment from 'moment';

const StopWatchButton = ({
  time,
  startOnPressAction,
  timerOnPressAction,
  paused,
}) => {
  const timerOpacity = new Animated.Value(1);
  const BLINK_DELAY = 800;
  const blinker = (toValue) => {
    if (paused) {
      Animated.timing(timerOpacity, {
        toValue,
        duration: BLINK_DELAY,
        useNativeDriver: false,
      }).start(() => {
        blinker(toValue === 1 ? 0 : 1);
      });
    } else {
      Animated.timing(timerOpacity, {
        toValue: 1,
        duration: BLINK_DELAY,
        useNativeDriver: false,
      }).start();
    }
  };

  blinker(0);

  if (time > 0) {
    return (
      <TouchableOpacity
        style={styles.mainActionButton}
        onPress={timerOnPressAction}>
        <Animated.View
          style={[styles.mainActionButton, { opacity: timerOpacity }]}>
          <Text style={styles.mainActionButtonText}>
            {moment.utc(time).format(i18n.TIME_FORMAT)}
          </Text>
          <Text
            style={[
              styles.mainActionButtonText,
              styles.mainActionButtonPausedText,
            ]}>
            {i18n.STOP_WATCH.PAUSE}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.mainActionButton}
      onPress={startOnPressAction}>
      <Text style={styles.mainActionButtonText}>{i18n.STOP_WATCH.START}</Text>
    </TouchableOpacity>
  );
};

export default StopWatchButton;

const styles = StyleSheet.create({
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
  mainActionButtonPausedText: {
    fontSize: 24,
  },
});
