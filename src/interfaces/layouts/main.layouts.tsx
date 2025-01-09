import { PATH } from "@/constant/path";
import Link from "next/link";
import React, { Fragment, type FC, type PropsWithChildren } from "react";
import CLogo from "../components/cs/logo";
import { MenuInlineOnLeft } from "./modules/menu-inline-on-left";
import { MenuInlineOnRight } from "./modules/menu-inline-on-right";
const MainLayouts: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Fragment>
			<nav className="p-2 bg-white text-neutral-800 sticky top-0 left-0 w-full h-14 border-b flex items-center">
				<div className="max-w-6xl mx-auto flex justify-between items-center w-full">
					<div className="flex justify-start items-center gap-x-4">
						<Link href={PATH.ROOT}>
							<CLogo />
						</Link>
						<MenuInlineOnLeft />
					</div>
					<div>
						<MenuInlineOnRight />
					</div>
				</div>
			</nav>
			<main className="w-screen bg-white">
				<main className="max-w-6xl mx-auto px-4">{children}</main>
			</main>
		</Fragment>
	);
};

export default MainLayouts;
