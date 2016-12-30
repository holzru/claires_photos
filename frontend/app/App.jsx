'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import rootReducer from './reducers/rootReducer';
import Top from './components/Top';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)} >
        <Top />
      </Provider>
    );
  }
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

export default App;
