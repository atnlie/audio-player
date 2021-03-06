import React from 'react';
import * as ActionTypes from './AudioActionTypes';
import {itunesAPIDefault} from '../../Constants/ApiEndpoint';

// get audio list by `strTerm` criteria
const getAudioList = strTerm => {
  const strMusicTerm = strTerm ? `&term=${strTerm}` : '&term=love';

  return async fetchAudioList => {
    const response = await fetch(itunesAPIDefault + strMusicTerm);
    const resData = await response.json();
    const audioListData = resData.results;

    fetchAudioList({
      type: ActionTypes.GET_AUDIO_LIST,
      payload: {
        audioList: audioListData,
        strTerm: strTerm,
        isLoading: false,
      },
    });
  };
};

export {getAudioList};
