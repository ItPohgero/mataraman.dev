"use client";
import { ENV } from "@/configs/environment";
import { cn } from "@/lib/utils";
import React, { Fragment, useState } from "react";

const ScreenForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	return (
		<Fragment>
			<div className="max-w-2xl mx-auto">
				{isLoading && (
					<div className="flex items-center justify-center min-h-screen">
						<p>loading...</p>
					</div>
				)}
				<iframe
					title="mataraman dev"
					src={ENV.URL.FORM_REGISTRATION}
					className={cn("w-full h-[90vh]", isLoading && "hidden")}
					onLoad={() => setIsLoading(false)}
				/>
			</div>
		</Fragment>
	);
};

export default ScreenForm;
