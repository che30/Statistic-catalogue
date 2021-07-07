async function FetchData(value) {
  const rawData = await fetch(`https://www.omdbapi.com/?apikey=42852a78&s=${value}`);
  const result = await rawData.json();
  if (result.Response === 'False') {
    return [{ movies: { error: 'error' } }];
  }
  const arr = [...result.Search];
  return arr;
}
export default FetchData;
