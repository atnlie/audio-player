import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {AudioReducer} from '../Reducers/AudioReducer/AudioReducer';

const rootReducer = combineReducers({
  audios: AudioReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export {Store};
