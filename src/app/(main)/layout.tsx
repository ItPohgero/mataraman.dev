import MainLayouts from "@/interfaces/layouts/main.layouts";
import React, { Fragment, type FC, type PropsWithChildren } from "react";
const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Fragment>
			<MainLayouts>{children}</MainLayouts>
		</Fragment>
	);
};

export default Layout;
