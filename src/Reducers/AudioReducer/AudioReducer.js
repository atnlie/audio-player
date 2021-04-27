import * as ActionType from './AudioActionTypes';

const initialState = {
  audioList: {
    resultCount: -1,
    results: [],
  },
  isLoading: false,
  strTerm: '',
  errorMessage: '',
  currentSong: '',
};

const AudioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUDIO_LIST: {
      return {
        ...state,
        isLoading: true,
        srcTerm: action.payload.strTerm,
        audioList: action.payload.audioList,
      };
    }
    case ActionType.SET_AUDIO_PLAY: {
      return {
        ...state,
        currentSong: action.payload.currentSong,
      };
    }
    default:
      return state;
  }
};

export {AudioReducer};
