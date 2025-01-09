"use client";
import { ENV } from "@/configs/environment";
import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import { useRouter } from "@/hooks/func/use_router";
import { Button } from "@/interfaces/components/ui/button";
import { cn } from "@/lib/utils";
import React, { Fragment, useState } from "react";

const ScreenForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	return (
		<Fragment>
			<div className="fixed top-4 left-4">
				<Button
					variant="outline"
					size="icon"
					onClick={() => router.push(PATH.ROOT)}
				>
					<AppIcon icon="arrow-left" />
				</Button>
			</div>
			<div className="max-w-2xl mx-auto">
				{isLoading && (
					<div className="flex items-center justify-center min-h-screen">
						<p>loading...</p>
					</div>
				)}
				<iframe
					title="mataraman dev"
					src={ENV.URL.FORM_REGISTRATION}
					className={cn("w-full h-screen", isLoading && "hidden")}
					onLoad={() => setIsLoading(false)}
				/>
			</div>
		</Fragment>
	);
};

export default ScreenForm;
