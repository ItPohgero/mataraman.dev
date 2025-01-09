"use client";
import { ASSETS } from "@/constant/assets";
import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import { useRouter } from "@/hooks/func/use_router";
import CFooter from "@/interfaces/components/cs/footer";
import { Button } from "@/interfaces/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Benefit from "./modules/benefit";
import { MemberDedicated } from "./modules/member-dedicated";

const ScreenMain = () => {
	const router = useRouter();
	return (
		<div>
			<div className="pt-20 lg:pt-52">
				<div>
					<div className="flex justify-center">
						<Image
							src={ASSETS.PUBLIC.LOGO}
							alt="MD"
							width={100}
							height={100}
							priority
						/>
					</div>
					<div className="text-center text-4xl lg:text-7xl font-bold mt-4">
						MATARAMAN
						<span className="text-lime-600">.DEV</span>
					</div>
					<div className="text-center mb-10 tracking-widest capitalize italic lg:text-2xl font-thin">
						have fun and grow
					</div>
					<div className="max-w-lg mx-auto text-center">
						<div>Komunitas IT Terbuka</div>
						<div>
							Ponorogo, Madiun, Magetan, Ngawi, Wonogiri, Pacitan, Karanganyar,
							Sragen dan Sekitarnya
						</div>
					</div>
					<div className="flex justify-center mt-10 w-max mx-auto gap-4 cursor-pointer">
						<Button
							className="rounded-full bg-orange-500"
							size="lg"
							onClick={() => router.push(PATH.FORM)}
						>
							<AppIcon icon="shield-user" className="text-white" />
							<span>Gabung Komunitas</span>
						</Button>
						<Link
							href={PATH.URL.TELEGRAM}
							target="_blank"
							className="bg-neutral-100 hover:bg-neutral-200 duration-300 p-2 rounded-lg h-10 w-10 flex justify-center items-center"
						>
							<AppIcon icon="telegram" className="w-5 h-5" />
						</Link>
						<Link
							href={PATH.URL.WHATSAPP}
							target="_blank"
							className="bg-neutral-100 hover:bg-neutral-200 duration-300 p-2 rounded-lg h-10 w-10 flex justify-center items-center"
						>
							<AppIcon icon="whatsapp" className="w-5 h-5" />
						</Link>
						<Link
							href={PATH.URL.INSTAGRAM}
							target="_blank"
							className="bg-neutral-100 hover:bg-neutral-200 duration-300 p-2 rounded-lg h-10 w-10 flex justify-center items-center"
						>
							<AppIcon icon="instagram" className="w-5 h-5" />
						</Link>
					</div>
				</div>
				<MemberDedicated />
				<div className="mt-20">
					<h2 className="font-bold text-xl text-center mb-4">
						Manfaat Gabung Komunitas
					</h2>
					<Benefit />
				</div>
			</div>
			<CFooter />
		</div>
	);
};

export default ScreenMain;
