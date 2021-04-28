import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './ListSong.styles';
import {getAudioList} from '../../Reducers/AudioReducer/AudioAction';
import playButton from '../../Assets/wav.jpg';
import * as ActionTypes from '../../Reducers/AudioReducer/AudioActionTypes';

export const Item = ({item, onPress, backgroundColor}) => (
  <TouchableOpacity
    testID={`cardPlayList`}
    onPress={onPress}
    style={[styles.item, backgroundColor]}
    key={`itemBtn-${item?.trackId}`}>
    <View style={[styles.item, styles.row]}>
      <Image source={{uri: item?.artworkUrl100}} style={styles.pic} />

      <View style={styles.end}>
        <Image
          style={[styles.icon, styles.playIndicator]}
          source={playButton}
        />
      </View>

      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>Name: {item?.trackName}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.artistTxt}>Artist: {item?.artistName}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.albumTxt}>Album: {item?.collectionName}</Text>
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
      item?.trackId === selectedItem?.trackId ? '#cdd1d2' : '#fff';

    return (
      <Item
        testID={'renderItem'}
        key={`item-${item?.trackId}`}
        item={item}
        onPress={() => setSelectedItem(item)}
        backgroundColor={{backgroundColor}}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        testID={'ListSongContent'}
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
