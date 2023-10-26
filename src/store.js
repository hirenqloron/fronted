// store.js

import { createStore } from 'redux';
import authReducer from './redux/authReducer';

const store = createStore(authReducer);

export default store;
