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
        getInfo();
      } else {
        Alert.alert('Info', 'Select song please');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const stopSong = () => {
    try {
      SoundPlayer.stop();
      getInfo();
    } catch (e) {
      console.log(e);
    }
  };

  const getInfo = async () => {
    try {
      const info = await SoundPlayer.getInfo();
      console.log('getInfo', info);
    } catch (e) {
      console.log('There is no song playing', e);
    }
  };

  return (
    <View styles={styles.container} testID="musicPlayer">
      <View styles={styles.searchBox}>
        <Button
          testID="buttonPlay"
          title="Play"
          onPress={() => playSong(currentSong)}
          disabled={false}
        />
      </View>
      <View styles={styles.songList}>
        <Button
          testID="buttonStop"
          title="Stop"
          onPress={stopSong}
          disabled={false}
        />
      </View>
    </View>
  );
};

export {MusicPlayer};
