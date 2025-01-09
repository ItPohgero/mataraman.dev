import { ASSETS } from "@/constant/assets";
import Image from "next/image";
import React from "react";

const CLogo = () => {
	return (
		<div className="flex justify-start items-center gap-x-2">
			<Image
				src={ASSETS.PUBLIC.LOGO}
				alt="logo"
				className="bg-cover object-cover"
				width={20}
				height={20}
			/>
			<span className="text-lg font-bold">mataraman.dev</span>
		</div>
	);
};

export default CLogo;
