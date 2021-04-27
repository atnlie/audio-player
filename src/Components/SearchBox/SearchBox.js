import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput} from 'react-native';

import styles from './SearchBox.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchValue, onChangeText] = useState('');

  useEffect(() => {
    if (searchValue.length > 3) {
      dispatch(getAudioList(searchValue));
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
