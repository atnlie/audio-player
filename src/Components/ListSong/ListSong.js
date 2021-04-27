import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './ListSong.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';
import playButton from '../../Assets/wav.jpg';
import * as ActionTypes from '../../Reducers/AudioReducer/AudioActionTypes';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor]}
    key={`itemBtn-${item?.trackId}`}>
    <View syles={styles.container}>
      <View style={styles.container2}>
        <Image
          source={{uri: item?.artworkUrl100}}
          style={{height: 40, width: 40, resizeMode: 'stretch', margin: 5}}
        />
        {/* add indicator for play*/}
        {/*<Image*/}
        {/*  source={playButton}*/}
        {/*  style={{height: 40, width: 40, resizeMode: 'stretch', margin: 5}}*/}
        {/*/>*/}
        <View style={styles.item}>
          <Text numberOfLines={1}>{item?.trackName.substring(0, 40)}</Text>
          <Text numberOfLines={1}>{item?.artistName.substring(0, 40)}</Text>
          <Text numberOfLines={1}>{item?.collectionName.substring(0, 40)}</Text>
        </View>
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
    const backgroundColor =
      item?.trackId === selectedItem?.trackId ? '#cdd1d2' : '#6e8d9f';
    const color = item?.trackId === selectedItem?.trackId ? 'white' : 'black';

    return (
      <Item
        key={`item-${item?.trackId}`}
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
        key={'flat-info'}
        data={audioListData || []}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedItem?.trackId}
      />
    </View>
  );
};

export {ListSong};
