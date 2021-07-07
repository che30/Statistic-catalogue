
import { Moviesearchdetails } from "../../actions";
describe('search movie method',() =>{
  it('it returns a value passed to  it ',()=>{
    const result = Moviesearchdetails('argument');
    expect(result).toEqual(result);
    })
     it('throws an error when called with no argument',() =>{
     expect(Moviesearchdetails()).not.toEqual({type: 'SEARCH MOVIE',
      movies: ''});
     })
})
