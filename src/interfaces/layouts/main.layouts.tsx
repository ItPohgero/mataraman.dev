import React, { type FC, type PropsWithChildren } from "react";

const MainLayouts: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default MainLayouts;
