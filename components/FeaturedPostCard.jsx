import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPostCard = () => {
// const FeaturedPostCard = ({ post }) => {
	return (
		<div className="relative h-72  flex flex-col items-center ">
			{/* <div
				className="absolute  bg-center bg-no-repeat bg-cover shadow-md w-full h-72"
				style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
			/>
			<div className="absolute bg-center opacity-90 bg-gradient-to-b from-[#0000002f] via-[#000000b7] to-[#000000c0]  mt-0 w-full h-28" />
			<div className="absolute bg-center opacity-90 bg-gradient-to-b from-[#00000000] via-[#000000ec] to-[#000000ed] mt-28 w-full h-44" />
			<div className="absolute bg-center opacity-90 bg-gradient-to-b from-[#000000be] via-[#000000f7] to-[#000000] mt-28 w-full h-44" />
			<div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-48 mt-20">
				<p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
					{post.title.length >= 70
						? post.title.slice(0, 70) + "..."
						: post.title}
				</p>
				<p className="text-white mb-4 text-shadow text-lg text-center px-14">
					{post.excerpt.length >= 150
						? post.excerpt.slice(0, 150)
						: post.excerpt}
				</p>
				<p className="text-white mb-4 absolute bottom-4 text-shadow font-semibold text-xs">
					{moment(post.createdAt).format("MMM DD, YYYY")}
				</p>
				<div className="flex items-center absolute bottom-2 w-full justify-center">
					<Image
						unoptimized
						alt={post.author.name}
						height="30px"
						width="30px"
						className="align-middle drop-shadow-lg rounded-full"
						src={post.author.photo.url}
					/>
					<p className="inline align-middle text-white text-shadow ml-2 font-medium">
						{post.author.name}
					</p>
				</div>
			</div>
			<Link href={`/post/${post.slug}`} passHref>
				<span className="cursor-pointer absolute w-full h-full" />
			</Link> */}
		</div>
	);
};

export default FeaturedPostCard;
