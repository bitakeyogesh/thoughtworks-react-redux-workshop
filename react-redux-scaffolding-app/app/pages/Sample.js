import React from 'react'
import Jumbotron from '../containers/jumbotron'
import SampleDataList from '../containers/sample-data-list'
import MoviesList from '../containers/movies-list'
const SamplePage = () =>
	<div className="sample-page">
		<Jumbotron/>
		<MoviesList/>
	</div>

export default SamplePage
