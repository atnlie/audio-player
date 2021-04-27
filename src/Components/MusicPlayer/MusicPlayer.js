import React from 'react';
import {View, Button, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {useDispatch, useSelector} from 'react-redux';
import styles from './MusicPlayer.styles';

const MusicPlayer = () => {
  const currentSong = useSelector(state => state?.audios?.currentSong);

  const playSong = currentSong => {
    try {
      if (!!currentSong) {
        SoundPlayer.playUrl(currentSong);
      } else {
        alert('select song please');
      }
    } catch (e) {
      alert('Cannot play the file');
    }
  };

  const stopSong = () => {
    try {
      SoundPlayer.stop();
    } catch (e) {
      alert('cannot to pause');
    }
  };

  return (
    <View styles={styles.container}>
      <View styles={styles.container2}>
        <Button title="Stop" onPress={stopSong} disabled={false} />
      </View>
      <View styles={styles.container2}>
        <Button
          title="Play"
          onPress={() => playSong(currentSong)}
          disabled={false}
        />
      </View>
    </View>
  );
};

export {MusicPlayer};
