import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {SearchBox} from '../../Components/SearchBox/SearchBox';
import {ListSong} from '../../Components/ListSong/ListSong';
import {MusicPlayer} from '../../Components/MusicPlayer/MusicPlayer';
const AudioPlayer = () => {
  return (
    <View>
      <SearchBox />
      <MusicPlayer />
      <View>
        <ListSong />
      </View>
    </View>
  );
};

export {AudioPlayer};
