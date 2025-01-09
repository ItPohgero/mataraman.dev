import { PATH } from "@/constant/path";
import Link from "next/link";
import React, { Fragment, type FC, type PropsWithChildren } from "react";
import CLogo from "../components/cs/logo";
import { MenuInlineOnLeft } from "./modules/menu-inline-on-left";
const MainLayouts: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Fragment>
			<nav className="py-2 px-4 bg-white/80 backdrop-blur text-neutral-800 sticky top-0 left-0 w-full h-14 border-b-[0.5px] flex items-center z-50">
				<div className="max-w-6xl mx-auto flex justify-between items-center w-full">
					<div className="flex justify-start items-center gap-x-4">
						<Link href={PATH.ROOT}>
							<CLogo />
						</Link>
						<MenuInlineOnLeft />
					</div>
				</div>
			</nav>
			<main className="w-screen bg-white">
				<main className="max-w-6xl mx-auto">{children}</main>
			</main>
		</Fragment>
	);
};

export default MainLayouts;
