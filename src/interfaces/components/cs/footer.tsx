import { PATH } from "@/constant/path";
import Link from "next/link";
import React from "react";

const CFooter = () => {
	return (
		<footer className="w-full mt-20">
			<div className="px-6 py-4 border-t border-secondary">
				<div className="flex flex-col items-center justify-center space-y-2 text-center">
					<p className=" text-neutral-500 capitalize text-xs">
						&copy; {new Date().getFullYear()} mataraman.dev All rights reserved.
					</p>
					<div className="flex items-center space-x-4 text-xxs">
						<Link
							href={PATH.TNC}
							className=" text-neutral-500 hover:text-neutral-700 text-xs"
						>
							Terms and Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default CFooter;
