// To wire up Redux, we need: (Remember, React and Redux are two different libraries!)
// 1. Provider (comes from react-redux)
// 2. CreateStore (comes from redux) - the store is like the brain of redux
// 3. Reducers to pass to CreateStore (./reducer)(rootReducer)
// 4. Make a rootReducer to import other Reducers
// 5. Make a single reducer to import into rootReducer(4)
// 6. Create the store (2) with the reducer (3)
// 7. Wrap the Provider (1) with store prop (4) around App

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const theStore = createStore(reducers);

ReactDOM.render(
<Provider store={theStore}>
  <App />
</Provider>,
  document.getElementById('root')
);
