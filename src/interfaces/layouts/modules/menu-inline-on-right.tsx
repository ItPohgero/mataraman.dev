import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import Link from "next/link";

export function MenuInlineOnRight() {
	return (
		<div className="flex justify-end items-center gap-x-2">
			<Link href={PATH.URL.TELEGRAM} target="_blank">
				<AppIcon icon="telegram" className="w-5 h-5" />
			</Link>
			<Link href={PATH.URL.WHATSAPP} target="_blank">
				<AppIcon icon="whatsapp" className="w-5 h-5" />
			</Link>
		</div>
	);
}
