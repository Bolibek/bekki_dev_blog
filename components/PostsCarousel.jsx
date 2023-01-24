import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { getFeaturedPosts } from "../services";
// import FeaturedPostCard from "./FeaturedPostCard";

const responsive = {
	superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PostsCarousel = () => {
	const [featuredPosts, setFeaturedPosts] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);
	// console.log(featuredPosts)
	// useEffect(() => {
	// 	getFeaturedPosts().then((res) => {
	// 		setFeaturedPosts(res, res);
	// 		setDataLoaded(true);
	// 	});
	// }, []);

	// const customLeftArrow = (
	// 	<div className="absolute arrow-btn left-2 top-28 text-center py-2 cursor-pointer bg-white rounded-full">
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			className="h-6 text-indigo w-full"
	// 			fill="none"
	// 			viewBox="0 0 24 24"
	// 			stroke="currentColor"
	// 		>
	// 			<path
	// 				strokeLinecap="round"
	// 				strokeLinejoin="round"
	// 				strokeWidth="2"
	// 				d="M10 19l-7-7m0 0l7-7m-7 7h18"
	// 			/>
	// 		</svg>
	// 	</div>
	// );

	// const customRightArrow = (
	// 	<div className="absolute arrow-btn right-2 top-28 text-center py-2 cursor-pointer bg-white rounded-full">
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			className=" h-6 text-indigo w-full"
	// 			fill="none"
	// 			viewBox="0 0 24 24"
	// 			stroke="currentColor"
	// 		>
	// 			<path
	// 				strokeLinecap="round"
	// 				strokeLinejoin="round"
	// 				strokeWidth="2"
	// 				d="M14 5l7 7m0 0l-7 7m7-7H3"
	// 			/>
	// 		</svg>
	// 	</div>
	// );

	return (
		<div className="mb-4 mx-auto">
			<h1 className=" font-bold">Popular posts</h1>
			<Carousel
				showDots={true}
				autoPlay={true}
				autoPlaySpeed={44000}
				infinite
				// customRightArrow={customRightArrow}
				// customLeftArrow={customLeftArrow}
				responsive={responsive}
				itemClass="px-3"
			>
				{/* {dataLoaded &&
					featuredPosts.map((post, index) => (
						<FeaturedPostCard key={index} post={post} />
					))} */}
			</Carousel>
		</div>
	);
};

export default PostsCarousel;
