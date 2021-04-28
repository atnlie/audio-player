import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import * as redux from 'react-redux';

import {ListSong, Item} from './ListSong';

describe('Test List Song Component', () => {
  const dispatch = jest.fn();
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

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
