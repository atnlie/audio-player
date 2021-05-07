import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput} from 'react-native';

import styles from './SearchBox.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchValue, onChangeText] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getAudioList(searchValue));
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <View>
      <TextInput
        testID={'searchBox'}
        style={styles.input}
        placeholder="Search Artist"
        onChangeText={onChangeText}
        value={searchValue || ''}
      />
    </View>
  );
};

export {SearchBox};
