import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import './index.css';
import App from './components/app/App';
import { saveState } from './localStorage'

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
    <Provider store={store }>
        <App/>
    </Provider>, 
    document.getElementById('root')
);