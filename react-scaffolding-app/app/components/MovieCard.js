import React from "react";
export default class MovieCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorite: false
		};
		this.addToFavorite = this.addToFavorite.bind(this);
		this.removeFromFavorite = this.removeFromFavorite.bind(this);
	}

	addToFavorite() {
		this.props.addToFavorite();
		this.setState(prevState => ({
			isFavorite: !prevState.isFavorite
		}));
	}
	removeFromFavorite() {
		this.props.removeFromFavorite();
		this.setState(prevState => ({
			isFavorite: !prevState.isFavorite
		}));
	}
	render() {
		const isAddedInFavorite = this.state.isFavorite;
		return (
			<div className="card" style={{ width: "18rem"}}>
				<img
					className="card-img-top"
					src={this.props.image}
					alt="Card image cap"
				/>
				{isAddedInFavorite ? (
						<button
							type="button"
							className="favbutton centered btn btn-danger"
							onClick={this.removeFromFavorite}
						>
							Remove From Favorites
						</button>
					) : (
						<button
							type="button"
							className="favbutton centered btn btn-success"
							onClick={this.addToFavorite}
						>
							Add To Favorites
						</button>
					)}

				<div className="card-body">
					<a href={this.props.url} className="card-title">
						{this.props.title}
					</a>
					<p className="card-text">{this.props.year}</p>
					<p className="card-text">
						<small className="text-muted">{this.props.type}</small>
					</p>
				</div>
			</div>
		);
	}
}
