import React from 'react';
import {View, Button, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {useSelector} from 'react-redux';
import styles from './MusicPlayer.styles';

const MusicPlayer = () => {
  const currentSong = useSelector(state => state?.audios?.currentSong);

  const playSong = currentSong => {
    try {
      console.log('currentSong', currentSong);
      if (!!currentSong) {
        SoundPlayer.playUrl(currentSong);
        getInfo();
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
      getInfo();
    } catch (e) {
      alert('cannot to pause');
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
    <View styles={styles.container}>
      <View styles={styles.searchBox}>
        <Button
          title="Play"
          onPress={() => playSong(currentSong)}
          disabled={false}
        />
        <Button title="Stop" onPress={stopSong} disabled={false} />
      </View>
      <View styles={styles.songList}>
        <Button title="Stop" onPress={stopSong} disabled={false} />
      </View>
    </View>
  );
};

export {MusicPlayer};
