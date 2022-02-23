import React, { useState, useEffect } from "react";
import Link from "next/link";
import {getCategories} from "../services"

export default function Categories() {
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		getCategories()
		  .then((res) => setCategories(res));
	}, []);
	return (
		<div className="bg-white rounded-lg shadow-lg pb-8 mb-8">
			<h3 className="text-xl mb-8 font-semibold border-b py-4 pl-7">
				Categories
			</h3>
			{categories.map((category) => (
				<Link key={category.slug} href={`/category/${category.slug}`} passHref>
					<span className="transition duration-200 cursor-pointer block pl-7 pb-3 mb3 text-indigo-900 hover:text-indigo-500">
            {category.name}
          </span>
				</Link>
			))}
		</div>
	);
}
