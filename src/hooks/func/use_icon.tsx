"use client";
import { Icon } from "@iconify/react";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const ICON_CONFIG = {
	loading: "svg-spinners:90-ring-with-bg",
	home: "solar:home-smile-angle-line-duotone",
	maps: "solar:map-arrow-square-line-duotone",
	telegram: "fa6-brands:telegram",
	whatsapp: "fa6-brands:whatsapp",
	download: "solar:download-square-line-duotone",
	"shield-user": "solar:shield-user-line-duotone",
	info: "solar:info-circle-broken",
	"users-group": "solar:users-group-rounded-line-duotone",
	airbuds: "solar:airbuds-case-charge-line-duotone",
	"arrow-right": "solar:alt-arrow-right-line-duotone",
	"arrow-left": "solar:alt-arrow-left-line-duotone",
	instagram: "iconoir:instagram",
} as const;

export type IconType = keyof typeof ICON_CONFIG;
export const IconType = Object.keys(ICON_CONFIG) as IconType[];

interface AppIconProps {
	icon: IconType;
	className?: string;
}
const AppIcon: React.FC<AppIconProps> = ({ icon, className = "" }) => {
	const iconPath = ICON_CONFIG[icon];
	return (
		<Icon icon={iconPath} className={twMerge("text-neutral-800", className)} />
	);
};

export default AppIcon;
