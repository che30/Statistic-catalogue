import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import SearchInput from './SearchInput';
//  const initialState = {
//    title: 'batman',
//    loading: true,
//    movies: [],
//    error: '',
//    year: '',
//    imbdID: '',

//  };

describe('search input methods', () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(thunk)));
  test('should render the initial message before users search a movie', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>,
    );
    await findByText('search');
  });
  it('renders correctly', () => {
    const tree = renderer

      .create(<Provider store={store}>
        <SearchInput />
      </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
