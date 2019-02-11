export const REQUEST_MOVIE_DATA = "REQUEST_MOVIE_DATA"
export const RECEIVE_MOVIE_DATA = "RECEIVE_MOVIE_DATA"


export function requestMovieData() {
	return {
		type   : REQUEST_MOVIE_DATA,
		payload: {}
	}
}
	export function receiveMovieData(movies) {
		return {
			type   : RECEIVE_MOVIE_DATA,
			payload: {movies}
		}

}
