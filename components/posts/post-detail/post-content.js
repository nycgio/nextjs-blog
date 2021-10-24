import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const renderers = {
		p(p) {
			const { node } = p;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];
				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{p.children}</p>;
		},
		code(code) {
			const { children } = code;
			const language = code.className.split("-")[1];
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={children}
				/>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={renderers}>{post.content}</ReactMarkdown>
		</article>
	);
}
