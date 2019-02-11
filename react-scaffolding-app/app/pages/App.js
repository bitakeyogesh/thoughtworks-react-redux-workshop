import React from "react";
import SamplePage from "./Sample";
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";

const App = () => (
	<div>
		<Header />
		<SamplePage />
		<MoviesList/>
	</div>
);

export default App;
