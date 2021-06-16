function FetchData() {
  // const result = await fetch('http://www.omdbapi.com/?apikey=42852a78&s=batman');
  // const res = await result.json();
  fetch('http://www.omdbapi.com/?apikey=42852a78&i=tt0372784')
    .then((val) => val.json()).then((last) => console.log(last.Poster));
  // console.log(res.Search[0]);
}

export default FetchData;
