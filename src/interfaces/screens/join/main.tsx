import { List } from "@/interfaces/components/cs/list";
import Link from "next/link";
import React from "react";

const ScreenJoin = () => {
	const data = [
		{
			name: "Whatsapp Group",
			link: "https://chat.whatsapp.com/KnORZ03YlpcBC18QceLfHc",
			className: "bg-green-200 hover:bg-green-400 text-green-800",
		},
		{
			name: "Telegram Group",
			link: "https://t.me/mataramandev",
			className: "bg-blue-200 hover:bg-blue-400 text-blue-800",
		},
		{
			name: "Whatsapp Channel",
			link: "https://whatsapp.com/channel/0029VaNgTlJ8qIznSx2U4Q07",
			className: "bg-neutral-200 hover:bg-neutral-400 text-neutral-800",
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/mataramandev?igsh=NHJhYnN6ZWRoeDEz&utm_source=qr",
			className: "bg-pink-200 hover:bg-pink-400 text-pink-800",
		},
	];
	return (
		<div className="flex justify-center pt-20">
			<div className="text-center">
				<h1 className="font-bold">JOIN GROUP KOMUNITAS</h1>
				<p>Silahkan bergabung dengan komunitas</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
					<List
						data={data}
						render={(e) => (
							<Link
								href={e.link}
								target="_blank"
								className={`${e.className} p-2 font-bold uppercase aspect-video flex items-center justify-center`}
							>
								{e.name}
							</Link>
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ScreenJoin;
