import React from 'react';
import renderer from 'react-test-renderer';
 import {render} from '@testing-library/react'
 import { createStore, compose, applyMiddleware } from 'redux';
 import { Provider } from 'react-redux';
 import rootReducer from '../reducers';
 import thunk from 'redux-thunk';
 import App from './App';

describe('search input methods', () => {
     const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(thunk)));
  test('finds the text search on the screen', async () => {
    const { findByText } = render(
      <Provider store={store}>
      < App />
    </Provider>
    )
    await findByText('search');
  });
   it('renders properly', () => {
     const tree = renderer
     
       .create(<Provider store={store}>
        <App/>
      </Provider>)
       .toJSON();
     expect(tree).toMatchSnapshot();
     
   });
})

