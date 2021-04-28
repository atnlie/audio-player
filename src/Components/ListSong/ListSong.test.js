import React from 'react';
import {render} from '@testing-library/react-native';
import * as redux from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as ActionTypes from '../../Reducers/AudioReducer/AudioActionTypes';
import {ListSong, Item} from './ListSong';

const getSongList = () => ({type: ActionTypes.GET_AUDIO_LIST});
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const fetch = jest.fn(() => Promise.resolve());
const initialState = {
  audios: {
    audioList: {
      resultCount: 1,
      results: [
        {
          trackID: '10923',
          trackName: 'we will rock you',
          artistName: 'scorpion',
          collectionName: 'good 80s',
        },
      ],
    },
    isLoading: false,
    strTerm: '',
    errorMessage: '',
    currentSong: '',
  },
};
const dispatch = jest.fn();
const useSelectorMock = jest.spyOn(redux, 'useSelector');
const useDispatchMock = jest.spyOn(redux, 'useDispatch');

describe('Test List Song Component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  useSelectorMock.mockReturnValue(null);
  useDispatchMock.mockReturnValue(null);
  test('Renders List Song correctly', () => {
    useDispatchMock.mockReturnValue(jest.fn());
    const {getByTestId} = render(<ListSong {...dispatch} />);
    const component = getByTestId('ListSongContent');

    expect(component).toBeTruthy();
  });

  test('Test Item List correctly', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(<Item {...dispatch} onPress={onPress} />);
    const component = getByTestId('cardPlayList');
    expect(component).toBeTruthy();
  });
});

const fetchDataAudioList = () => {
  return dispatch => {
    return fetch('http://www.example.com/v1/api/song').then(() =>
      dispatch(getSongList()),
    );
  };
};

describe('Test Fetch data Song List', () => {
  test('Should get Song List', async () => {
    const store = mockStore({});
    return store.dispatch(fetchDataAudioList()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(getSongList());
    });
  });
});
