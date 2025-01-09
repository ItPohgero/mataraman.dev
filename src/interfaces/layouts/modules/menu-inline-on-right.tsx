import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import Link from "next/link";

export function MenuInlineOnRight() {
	return (
		<div className="flex justify-end items-center gap-x-2">
			<Link
				href={PATH.URL.TELEGRAM}
				target="_blank"
				className="bg-neutral-100 hover:bg-neutral-200 duration-300 p-2 rounded-lg"
			>
				<AppIcon icon="telegram" className="w-5 h-5" />
			</Link>
			<Link
				href={PATH.URL.WHATSAPP}
				target="_blank"
				className="bg-neutral-100 hover:bg-neutral-200 duration-300 p-2 rounded-lg"
			>
				<AppIcon icon="whatsapp" className="w-5 h-5" />
			</Link>
		</div>
	);
}
