import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './root';
import '../assets/sass/index.scss';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
