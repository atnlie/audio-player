import React from 'react';
import * as redux from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

import {MusicPlayer} from './MusicPlayer';

jest.mock('react-native-sound-player', () => {
  return {
    start: jest.fn(),
    stop: jest.fn(),
    getInfo: jest.fn(),
  };
});

const mockComponent = {
  playButton: jest.fn().mockImplementation(() => {
    return jest.fn();
  }),
  stopButton: jest.fn(),
};

describe('Test Music Player', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  // useSelectorMock.mockReturnValue('love song');
  useSelectorMock.mockReturnValue(null);

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('Renders Music Player correctly', () => {
    const {getByTestId} = render(<MusicPlayer />);
    const component = getByTestId('musicPlayer');

    expect(component).toBeTruthy();
  });

  test('Play button is Exist', () => {
    const {getByTestId} = render(<MusicPlayer />);
    const component = getByTestId('buttonPlay');

    expect(component).toBeTruthy();
  });

  test('Stop button is Exist', () => {
    const {getByTestId} = render(<MusicPlayer />);

    const component = getByTestId('buttonStop');
    expect(component).toBeTruthy();
  });

  test('Play button get Click without click playlist action', () => {
    const {getByTestId} = render(<MusicPlayer {...mockComponent} />);
    const component = getByTestId('buttonPlay');
    expect(component).toBeTruthy();

    fireEvent.press(component);
    expect(mockComponent.playButton).toBeCalledTimes(0);
  });

  test('Play button get Click action', () => {
    useSelectorMock.mockReturnValue('love song');
    const {getByTestId} = render(<MusicPlayer {...mockComponent} />);
    const component = getByTestId('buttonPlay');
    expect(component).toBeTruthy();

    fireEvent.press(component);
    expect(mockComponent.playButton).toBeCalledTimes(0);
  });

  test('Stop button get Click action', () => {
    const {getByTestId} = render(<MusicPlayer {...mockComponent} />);
    const component = getByTestId('buttonStop');
    expect(component).toBeTruthy();

    fireEvent.press(component);
    expect(mockComponent.playButton).toBeCalledTimes(0);
  });
});
