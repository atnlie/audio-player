import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';

import styles from './SearchBox.styles';

const SearchBox = () => {
  const [searchValue, onChangeText] = useState('');

  useEffect(() => {
    console.log('Search for : ', searchValue);
    if (searchValue.length > 3) {
      console.log('Fetch Data with : ', searchValue);
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
