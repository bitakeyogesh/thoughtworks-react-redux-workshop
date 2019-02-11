import { Cmd, loop } from "redux-loop";
import {
	REQUEST_MOVIE_DATA,
	RECEIVE_MOVIE_DATA,
	receiveMovieData
} from "../actions/movie";
import { fetchMovieData } from "../effects/movie";

export default (state = { favorites: 0, movies: [] }, action) => {
	switch (action.type) {
		case REQUEST_MOVIE_DATA:
			return loop(
				state,
				Cmd.run(fetchMovieData, {
					args: [],
					successActionCreator: receiveMovieData,
					failActionCreator: console.log
				})
			);

		case RECEIVE_MOVIE_DATA:
			return {
				...state,
				movies: action.payload.movies
			};

		default:
			return state;
	}
};
