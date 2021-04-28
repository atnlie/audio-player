import React from 'react';
import {View, Button, Alert} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {useSelector} from 'react-redux';
import styles from './MusicPlayer.styles';

const MusicPlayer = () => {
  const currentSong = useSelector(state => state?.audios?.currentSong);

  const playSong = currentSong => {
    try {
      if (!!currentSong) {
        SoundPlayer.playUrl(currentSong);
      } else {
        Alert.alert('Info', 'Please select the song.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const stopSong = () => {
    try {
      SoundPlayer.stop();
    } catch (e) {
      console.log(e);
    }
  };

  const pauseSong = () => {
    try {
      SoundPlayer.pause;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mainContainer} testID="musicPlayer">
      <View style={styles.buttonContainer}>
        <Button
          testID="buttonPause"
          title="Pause"
          onPress={pauseSong}
          disabled={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          testID="buttonPlay"
          title="Play"
          onPress={() => playSong(currentSong)}
          disabled={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Stop"
          testID="buttonStop"
          onPress={stopSong}
          disabled={false}
        />
      </View>
    </View>
  );
};

export {MusicPlayer};
