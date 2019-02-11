export const fetchMovieData = () => {
	return window.fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json')
	.then((res) => res.json())
	.catch(console.log)
}
