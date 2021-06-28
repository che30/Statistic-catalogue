async function FetchData(value) {
  const rawData = await fetch(`http://www.omdbapi.com/?apikey=42852a78&s=${value}`);
  const result = await rawData.json();
  const arr = [...result.Search];
  return arr;
  // console.log(result.Search[0]);
  // fetch('http://www.omdbapi.com/?apikey=42852a78&i=tt0372784')
  //   .then((val) => val.json()).then((last) => console.log(last.Poster));
  // console.log(res.Search[0]);
}
export default FetchData;
