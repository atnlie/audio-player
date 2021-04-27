import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './ListSong.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';
import playButton from '../../Assets/wav.jpg';
import * as ActionTypes from '../../Reducers/AudioReducer/AudioActionTypes';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View syles={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item?.artworkUrl100}}
          style={{height: 60, width: 60, resizeMode: 'stretch', margin: 5}}
        />
      </View>
      <View style={{flex: 1}}>
        <Image
          source={playButton}
          style={{height: 60, width: 60, resizeMode: 'stretch', margin: 5}}
        />
      </View>
      <View style={{flex: 1}}>
        <Text>{item?.trackName}</Text>
        <Text>{item?.artistName}</Text>
        <Text>{item?.collectionName}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ListSong = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const audioListData = useSelector(state => state?.audios?.audioList);

  useEffect(() => {
    const loadAudioList = async () => {
      dispatch(getAudioList('love'));
    };

    loadAudioList();
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: ActionTypes.SET_AUDIO_PLAY,
      payload: {currentSong: selectedItem?.previewUrl},
    });
  }, [selectedItem]);

  const renderItem = ({item}) => {
    // console.log('item ', item);
    const backgroundColor =
      item?.trackId === selectedItem?.trackId ? '#cdd1d2' : '#6e8d9f';
    const color = item?.trackId === selectedItem?.trackId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={audioListData || []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedItem?.trackId}
      />
    </View>
  );
};

export {ListSong};
