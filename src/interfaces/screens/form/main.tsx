"use client";
import { ENV } from "@/configs/environment";
import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import { useRouter } from "@/hooks/func/use_router";
import { Button } from "@/interfaces/components/ui/button";
import { cn } from "@/lib/utils";
import React, { Fragment, useState, useEffect } from "react";

const ScreenForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	// Prevent body scroll when iframe is in focus
	useEffect(() => {
		const handleTouchMove = (e: TouchEvent) => {
			const iframe = document.querySelector("iframe");
			if (iframe && e.target instanceof Node && iframe.contains(e.target)) {
				e.preventDefault();
			}
		};

		document.body.addEventListener("touchmove", handleTouchMove, {
			passive: false,
		});
		return () => {
			document.body.removeEventListener("touchmove", handleTouchMove);
		};
	}, []);

	return (
		<Fragment>
			<div className="fixed top-4 left-4 z-10">
				<Button
					variant="outline"
					size="icon"
					onClick={() => router.push(PATH.ROOT)}
				>
					<AppIcon icon="arrow-left" />
				</Button>
			</div>
			<div className="fixed inset-0 flex flex-col overflow-hidden">
				<div className="flex-1 relative">
					{isLoading && (
						<div className="absolute inset-0 flex items-center justify-center bg-white">
							<p>loading...</p>
						</div>
					)}
					<iframe
						title="mataraman dev"
						src={ENV.URL.FORM_REGISTRATION}
						className={cn(
							"w-full h-full border-none max-w-2xl mx-auto",
							isLoading && "hidden",
						)}
						onLoad={() => setIsLoading(false)}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default ScreenForm;
