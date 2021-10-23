import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
	title: "Getting Started With NextJS",
	slug: "getting-started-with-nextjs",
	image: "getting-started-with-nextjs.png",
	content: "# This is a first post",
	date: "10/23/2021",
};

export default function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
}
