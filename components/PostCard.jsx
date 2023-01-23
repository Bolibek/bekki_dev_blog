import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
	return (
		<div className="w-full h-28 flex flex-row my-2 ">
			<div className="relative">
				<div className={`w-40 `}>
					<img
						src={post.featuredImage.url}
						alt={post.title}
						className=" w-40 h-28  z-50"
					/>
				</div>
			</div>

			<div className="bg-white relative shadow-lg  pt-1 w-[80%]  text-start px-2">
				<h2 className=" text-[.5rem] font-semibold text-sky-600 uppercase">
					{post.categories[0].name}
				</h2>
				<h1 className="transition duration-700  mb-1 cursor-pointer hover:text-indigo-700 text-md font-semibold">
					<Link href={`/post/${post.slug}`}>{post.title}</Link>
				</h1>
				<p className=" text-[.65rem] leading-tight text-gray-700 font-normal">
					{post.excerpt.length > 250
						? post.excerpt.slice(0, 250).trim() + "..."
						: post.excerpt}
				</p>
				<div className="absolute bottom-0 mb-1 ">
					<div className=" flex flex-row">
						<div className="flex mr-3 ">
							<img
								src={post.author.photo.url}
								alt={post.author.name}
								className="align-middle rounded-full w-4 h-4"
							/>
							<span className="text-xs mx-1">BY</span>

							<p className="inline text-xs align-middle text-gray-700 ">
								{post.author.name}
							</p>
						</div>
						<div className="font-medium flex flex-row text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 text-pink-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span className="text-xs">
								{moment(post.createdAt).format("MMM DD, YYYY")}
							</span>
						</div>
						<div className=" ml-24">
							<div className="">
								<Link href={`/post/${post.slug}`}>
									<span className="transition duration-500 flex flex-row transform hover:-translate-y-1 text-xs font-bold rounded-full text-indigo-800 cursor-pointer">
										Read more{" "}
										<img
											className=" w-3 h-3 mt-[.23em]"
											src="https://img.icons8.com/sf-black-filled/30/indigo/forward.png"
											alt="arrow"
										/>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
// <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-12">
// 	<h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-700 text-3xl font-semibold">
// 		<Link href={`/post/${post.slug}`}>{post.title}</Link>
// 	</h1>
// 	<div className="block lg:flex text-center items-center justify-center mb-8 w-full">
// 		<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
// 			<img
// 				src={post.author.photo.url}
// 				alt={post.author.name}
// 				width="30px"
// 				height="30px"
// 				className="align-middle rounded-full"
// 			/>
// 			<p className="inline align-middle text-gray-700 ml-2 text-lg">
// 				{post.author.name}
// 			</p>
// 		</div>
// 		<div className="font-medium text-gray-700">
// 			<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				className="h-6 w-6 inline mr-2 text-pink-500"
// 				fill="none"
// 				viewBox="0 0 24 24"
// 				stroke="currentColor"
// 			>
// 				<path
// 					strokeLinecap="round"
// 					strokeLinejoin="round"
// 					strokeWidth="2"
// 					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// 				/>
// 			</svg>
// 			<span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
// 		</div>
// 	</div>
// 	<div className="relative overflow-hidden shadow-md pb-80 mb-6">
// 		<img
// 			src={post.featuredImage.url}
// 			alt={post.title}
// 			className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
// 		/>
// 	</div>
// 	<p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
// 		{post.excerpt}
// 	</p>
// 	<div className="text-center">
// 		<Link href={`/post/${post.slug}`}>
// 			<span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-indigo-800 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
// 				Continue Reading
// 			</span>
// 		</Link>
// 	</div>
// </div>
