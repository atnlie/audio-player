import React from 'react';
import {View} from 'react-native';

import {SearchBox} from '../../Components/SearchBox/SearchBox';
import {ListSong} from '../../Components/ListSong/ListSong';
import {MusicPlayer} from '../../Components/MusicPlayer/MusicPlayer';
import styles from './AudioPlayer.styles';

const AudioPlayer = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.searchBox}>
        <SearchBox />
      </View>
      <View style={styles.songList}>
        <ListSong />
      </View>
      <View style={styles.musicPlayer}>
        <MusicPlayer />
      </View>
    </View>
  );
};

export {AudioPlayer};
