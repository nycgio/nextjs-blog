import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "database", "posts");
console.log(process.cwd());

export const getPostsFiles = () => {
	return fs.readdirSync(postsDirectory);
};
export const getPostData = (postIdentifer) => {
	const postSlug = postIdentifer.replace(/\.md$/, ""); //removes the file extension
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	const postData = {
		slug: postSlug,
		...data,
		content,
	};
	return postData;
};

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory);

	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	const sortedPost = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPost;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.filter((post) => post.isFeatured);
	return featuredPosts;
};
