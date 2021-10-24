import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts, getServerPost } from "../lib/posts-util";

import Head from "next/head";

export default function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Giorgi&apos;s Blog</title>
				<meta
					name="description"
					content="I post about programming and web development"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts();
	const serverPost = getServerPost();
	console.log(serverPost);

	return {
		props: {
			posts: featuredPosts,
		},
	};
};
