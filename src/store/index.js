import { createStore } from 'redux';
import reducer from '../reducers/index';
import { loadState } from '../localStorage';

const localState = loadState();

export default createStore(
    reducer,
    localState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());