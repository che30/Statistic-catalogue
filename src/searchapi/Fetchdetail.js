async function FetchDetail(value) {
  const rawData = await fetch(`https://www.omdbapi.com/?apikey=42852a78&i=${value}`);
  const result = await rawData.json();
  return result;
}
export default FetchDetail;
