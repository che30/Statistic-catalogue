async function FetchData(value) {
  const rawData = await fetch(`http://www.omdbapi.com/?apikey=42852a78&s=${value}`);
  const result = await rawData.json();
  if (result.Response === 'False') {
    console.log('error is false');
    return [{ movies: { error: undefined } }];
  }
  const arr = [...result.Search];
  return arr;
}
export default FetchData;
