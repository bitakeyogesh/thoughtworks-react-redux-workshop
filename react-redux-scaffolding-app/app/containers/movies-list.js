import React from 'react'
import {connect} from "react-redux"
import MoviesList from '../components/MoviesList'
import {requestMovieData} from '../actions/movie'

// This is a container

export const mapStateToProps = (state) => {
	return {
		movies: state.movie.movies
		}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		getMoviesList : () => dispatch(requestMovieData())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesList)
