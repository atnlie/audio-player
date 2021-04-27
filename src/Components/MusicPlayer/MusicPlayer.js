import React from 'react';
import {View, TouchableOpacity, Button, Image} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {useDispatch, useSelector} from 'react-redux';

const MusicPlayer = () => {
  const currentSong = useSelector(state => state?.audios?.currentSong);

  const playSong = currentSong => {
    try {
      console.log('currentSong ', currentSong);
      SoundPlayer.playUrl(currentSong);
    } catch (e) {
      alert('Cannot play the file');
    }
  };

  const pauseSong = () => {
    try {
      SoundPlayer.pause();
    } catch (e) {
      alert('cannot to pause');
    }
  };

  return (
    <View styles={{flex: 1}}>
      <View
        styles={{
          marginBottom: 10,
          backgroundColor: 'red',
          flex: 1,
          flexDirection: 'rows',
        }}>
        <Button title="Pause" onPress={pauseSong} disabled={false} />
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
