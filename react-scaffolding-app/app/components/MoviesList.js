import React from "react";
import MovieCard from "./MovieCard";
export default class MoviesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			favorites: 0
		};
		this.addToFavorite = this.addToFavorite.bind(this);
		this.removeFromFavorite = this.removeFromFavorite.bind(this);
	}

	componentWillMount() {
		fetch("https://thoughtworksreactreduxmovies.firebaseio.com/movies.json")
			.then(resp => resp.json())
			.then(val =>
				this.setState({
					movies: val
				})
			);
	}

	addToFavorite() {
		this.setState(prevState => ({
			favorites: prevState.favorites + 1
		}));
	}
	removeFromFavorite() {
		this.setState(prevState => ({
			favorites: prevState.favorites - 1
		}));
	}

	render() {
		return (
			<div id="movieListContainer" className="container">
				<div style={{display:'flex'}}>
				<h2>Movies</h2>
				<h4 style={{'margin-left':'auto'}}>Favorites {this.state.favorites}</h4>
				</div>
				<br />
				<div className="card-deck horizontal-scroll-wrapper">
					{this.state.movies.map(movie => (
						<MovieCard
							title={movie.Title}
							year={movie.Year}
							type={movie.Type}
							image={movie.Poster}
							url={movie.Website}
							addToFavorite={this.addToFavorite}
							removeFromFavorite={this.removeFromFavorite}
						/>
					))}
				</div>
			</div>
		);
	}
}
