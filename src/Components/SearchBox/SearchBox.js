import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput} from 'react-native';

import styles from './SearchBox.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchValue, onChangeText] = useState('');

  useEffect(() => {
    console.log('Search for : ', searchValue);
    if (searchValue.length > 3) {
      console.log('Fetch Data with : ', searchValue);
      dispatch(getAudioList('love'));
    }
  }, [searchValue]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search Artist"
        onChangeText={onChangeText}
        value={searchValue || ''}
      />
    </View>
  );
};

export {SearchBox};
