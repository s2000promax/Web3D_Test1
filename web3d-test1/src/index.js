import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './BLL/redux-store'
import ControlFormContainer from './UI/ControlFormContainer'
import WebForm3dContainer from './UI/WebForm3dContainer';
import WebForm3dFunc from './UI/WebForm3dFunc';

ReactDOM.render(
  <Provider store={store}>

{/*<ControlFormContainer />*/}

{/*<WebForm3dContainer />*/}

{<WebForm3dFunc />}

</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

