import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {AudioReducer} from '../Reducers/AudioReducer/AudioReducer';

// set multiple reducer
const rootReducer = combineReducers({
  audios: AudioReducer,
});

// create redux store
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export {Store};
