import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
function Header() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getCategories().then((res) => setCategories(res));
	}, []);
	return (
		<div className=" bg-[#00121e] mx-auto  mb-1 border-b border-blue-500 ">
			<div className="px-10 w-full inline-block py-4">
				<div className="md:float-left block">
					<Link href="/" passHref>
						<span className="cursor-pointer font-bold text-4xl text-white flex flex-row">
							<img
								src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-developer-basic-ui-elements-2.2-sbts2018-solid-sbts2018.png"
								// src="https://img.icons8.com/glyph-neue/64/ffffff/developer.png"
								alt="logo"
								className="w-9 h-8"
							/>
							<span className="ml-2">Bekki_dev</span>
						</span>
					</Link>
				</div>
				<div className="hidden md:float-right md:contents">
					{categories.map((category) => (
						<Link
							key={category.slug}
							href={`/category/${category.slug}`}
							passHref
						>
							<span className="md: float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;
