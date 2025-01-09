import { ENV } from "@/configs/environment";
import React, { Fragment } from "react";

const ScreenForm = () => {
	return (
		<Fragment>
			<div className="max-w-3xl mx-auto">
				<iframe
					title="mataraman dev"
					src={ENV.URL.FORM_REGISTRATION}
					className="w-full min-h-screen"
				/>
			</div>
		</Fragment>
	);
};

export default ScreenForm;
