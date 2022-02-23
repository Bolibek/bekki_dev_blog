import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

export default function PostWidget({ slug, categories }) {
	const [relatedPosts, setRelatedPosts] = useState([]);
	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug ).then((res) => setRelatedPosts(res));
		} else {
			getRecentPosts().then((res) => setRelatedPosts(res));
		}
	}, [slug]);

	return (
		
		<div className="bg-white rounded-lg shadow-lg pb-8 mb-8 mr-12">
			<h3 className="text-xl mb-8 font-semibold border-b py-4 pl-7">
				{slug ? "Related Posts" : "Recent Posts"}
			</h3>
			{relatedPosts.map((post, index) => (
				<div key={index} className="flex items-center w-full mb-4 pl-7">
					<div className="w-16 flex-none">
						<img
							src={post.featuredImage.url}
							alt={post.title}
							width="50px"
							height="50px"
							className="align-middle rounded-full object-cover"
						/>
					</div>
					<div className="transition duration-200 flex-grow ml-4 border-b text-indigo-900 hover:text-indigo-500">
						<p className="text-grey-500 font-xs">
							{moment(post.createdAt).format("MMM DD YYYY")}
						</p>
						<Link href={`/post/${post.slug}`}>
		          {post.title}
		        </Link>
					</div>
				</div>
  ))}
		</div>
	);
}
