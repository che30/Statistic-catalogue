import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import MovieDetails from '../component/MovieDetails';

describe('search input methods', () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(thunk)));

  it('renders properly', () => {
    const tree = renderer

      .create(
        <Provider store={store}>
          <MovieDetails />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});