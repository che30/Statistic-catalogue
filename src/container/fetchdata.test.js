import Fetchdata from './Fetchdata';

it('Renders the connected app with initialState', () => {
  const promise = Fetchdata('avengers');
  const json = promise.then((values) => values.json());
  json.then((data) => {
    expect(data.Search[0].Title).toBe('The Avengers');
  });
});
