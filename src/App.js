/**
 * Audio_Player Player
 * by Anton - Heni Kurniyanto
 * email: atnlie@gmail.com
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AudioPlayer} from './Containers/AudioPlayer/AudioPlayer';
import {Store} from './Store/Store';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={Store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AudioPlayer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
