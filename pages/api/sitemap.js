import { SitemapStream, streamToPromise } from "sitemap";
import { getAllPosts } from "../../lib/posts-util";

export default async function handler(req, res) {
	try {
		const Stream = new SitemapStream({
			hostname: `https://${req.headers.host}`,
			cacheTime: 600000,
		});

		const posts = getAllPosts();

		// create each url
		posts.forEach((post) => {
			Stream.write({
				url: `/posts/${post.slug}`,
				changefreq: "daily",
				priority: 0.9,
			});
		});

		// end sitemap stream
		Stream.end();

		const sitemapOutput = (await streamToPromise(Stream)).toString();
		res.writeHead(200, {
			"Content-Type": "application/xml",
		});
		res.end(sitemapOutput);
	} catch (e) {
		console.log(e);
		res.send(JSON.stringify(e));
	}
}
