import React from 'react';
import ReactDOM from 'react-dom';
//import './style.css'
import App from './App'

import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer'
import {types} from './constants/appConstant';
import store from './app/store'
/*const store = createStore(RootReducer,
  {'payload': {'orderStatus' : '1'},
  'value' : 1,
  });
console.log('state:');
console.log(store.getState());
store.dispatch({type:types.GET_ORDER_STATUS, payload : 1})
console.log(store.getState())
store.subscribe(()=>{ console.log(store.getState());})
const unsubscribe = store.subscribe(()=>{console.log(store.getState());});
unsubscribe();*/
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));