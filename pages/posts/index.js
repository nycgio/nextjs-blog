import AllPosts from "../../components/posts/all-posts";
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
export default function PostIndex() {
	return <AllPosts posts={DUMMY_POSTS} />;
}
