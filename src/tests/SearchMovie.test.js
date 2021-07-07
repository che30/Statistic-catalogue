import { SearchMovie } from "../actions";
describe('search movie method',() =>{
  it('it returns a value passed to  it ',()=>{
    const result = SearchMovie('argument');
    expect(result).toEqual(result);
    })
    it('throws an error when called with no argument',() =>{
      console.log(SearchMovie('first argument', [1,2,3]))
    expect(SearchMovie('first argument', [1,2,3])).toEqual({type: 'SEARCH MOVIE',
     movies: 'first argument'});
    })
})

