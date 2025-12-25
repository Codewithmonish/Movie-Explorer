useEffect(() => {
  axios.get("http://localhost:5000/api/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.log(err));
}, []);
