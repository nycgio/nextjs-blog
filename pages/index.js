import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
	{
		title: "Getting Started With NextJS",
		slug: "getting-started-with-nextjs",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next js is the react framework for production - it makes building fullstack react applications with server side rendering",
		date: "10/23/2021",
	},
	{
		title: "Getting Started With NextJS",
		slug: "getting-started-with-nextjs2",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next js is the react framework for production - it makes building fullstack react applications with server side rendering",
		date: "10/23/2021",
	},
	{
		title: "Getting Started With NextJS",
		slug: "getting-started-with-nextjs3",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next js is the react framework for production - it makes building fullstack react applications with server side rendering",
		date: "10/23/2021",
	},
	{
		title: "Getting Started With NextJS",
		slug: "getting-started-with-nextjs4",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next js is the react framework for production - it makes building fullstack react applications with server side rendering",
		date: "10/23/2021",
	},
];

export default function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}
