import React from "react";
import { mount } from "enzyme";
import MoviesList from "../../app/components/MoviesList";

describe("[Components] - MoviesList", () => {

	const data = [
		{
			Title: "X-Men: The Last Stand",
			Year: "2006",
			Type: "movie",
			Image: "https://www.gstatic.com/webp/gallery3/1.png",
			URL: "https://en.wikipedia.org/wiki/X-Men:_The_Last_Stand"
		}
	];

	it("should render correctly", () => {
		const node = mount(<MoviesList movies={data}/>);
		expect(node.find("#movieListContainer").exists()).toEqual(true);
	});

	it("Test Movie Card Component Rendered Correctly ", () => {

		const node = mount(<MoviesList movies={data}/>);
		expect(node.find("MovieCard").exists()).toEqual(true);
	});

	xit("Test Movie Card Components Received Corrects Props Sent By MovieList Component ", () => {
		const node = shallow(<MoviesList movies={data}/>);
		expect(node.find("#movieListContainer").exists()).toEqual(true);
	});
});
