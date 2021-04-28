// import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as ActionTypes from './AudioActionTypes';
import {itunesAPIDefault} from '../../Constants/ApiEndpoint';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
fetch = jest.fn(() => Promise.resolve());

const getAudioList = () => ({type: ActionTypes.GET_AUDIO_LIST});

const fetchDataAudioList = () => {
  return dispatch => {
    return fetch('http://www.example.com/v1/api/song').then(() =>
      dispatch(getAudioList()),
    );
  };
};

describe('Test Fetch data Song List', () => {
  test('Should get Song List', () => {
    const store = mockStore({});

    return store.dispatch(fetchDataAudioList()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(getAudioList());
    });
  });
});
