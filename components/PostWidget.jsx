import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
// import { getRecentPosts, getSimilarPosts } from "../services";

export default function PostWidget() {
// export default function PostWidget({ slug, categories }) {
	const [relatedPosts, setRelatedPosts] = useState([]);
	// useEffect(() => {
	// 	if (slug) {
	// 		getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
	// 	} else {
	// 		getRecentPosts().then((res) => setRelatedPosts(res));
	// 	}
	// }, [slug, categories]);
	return (
		<div className="bg-transparent shadow-lg p-8 mb-8">
			{/* <h3 className="text-xl mb-8 font-semibold border-b pb-4">
				{slug ? "Related Posts" : "Recent Posts"}
			</h3>
			{relatedPosts.map((post, index) => (
				<div key={post.title} className="flex items-center w-full mb-4">
					<div className="w-16 flex-none">
						<img
							src={post.featuredImage.url}
							alt={post.title}
							className="align-middle w-10 h-10 rounded-full object-cover"
						/>
					</div>
					<div className="transition duration-200 flex-grow ml-4 border-b text-indigo-800 hover:text-indigo-400">
						<p className="text-gray-500 font-xs">
							{moment(post.createdAt).format("MMM DD, YYYY")}
						</p>
						<Link href={`/post/${post.slug}`}>{post.title}</Link>
					</div>
				</div>
			))} */}
		</div>
	);
}
