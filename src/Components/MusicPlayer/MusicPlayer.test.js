import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import {MusicPlayer} from './MusicPlayer';

jest.mock('react-native-sound-player', () => {
  return {
    start: jest.fn(),
    stop: jest.fn(),
    getInfo: jest.fn(),
  };
});

const mockRedux = {
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
        {
          trackID: '10925',
          trackName: 'i love you',
          artistName: 'antlie',
          collectionName: 'love song',
        },
      ],
    },
    isLoading: false,
    strTerm: '',
    errorMessage: '',
    currentSong: 'i love you',
  },
};

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn().mockImplementation(selector =>
    selector({
      ...mockRedux,
    }),
  ),
}));

const mockComponent = {
  playButton: jest.fn().mockImplementation(() => {
    return jest.fn();
  }),
  stopButton: jest.fn(),
};

describe('Test Music Player', () => {
  afterEach(() => {
    jest.clearAllMocks();
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

  test('Stop button is Exist', () => {
    const {getByTestId} = render(<MusicPlayer />);

    const component = getByTestId('buttonPause');
    expect(component).toBeTruthy();

    fireEvent.press(component);
    expect(mockComponent.playButton).toBeCalledTimes(0);
  });

  test('Play button get Click without click playlist action', () => {
    const {getByTestId} = render(<MusicPlayer {...mockComponent} />);
    const component = getByTestId('buttonPlay');
    expect(component).toBeTruthy();

    fireEvent.press(component);
    expect(mockComponent.playButton).toBeCalledTimes(0);
  });

  test('Play button get Click with click playlist action', () => {
    mockRedux.audios.currentSong = '';
    const {getByTestId} = render(<MusicPlayer />);
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
