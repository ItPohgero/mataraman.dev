import { PATH } from "@/constant/path";
import AppIcon from "@/hooks/func/use_icon";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from "@/interfaces/components/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/interfaces/components/ui/dropdown-menu";
import Link from "next/link";

export function MenuInlineOnLeft() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<AppIcon icon="shield-user" />
				<BreadcrumbItem className="mr-2">
					<BreadcrumbLink href={PATH.FORM}>Gabung</BreadcrumbLink>
				</BreadcrumbItem>
				<AppIcon icon="info" />
				<BreadcrumbItem className="mr-2">
					<BreadcrumbLink href={PATH.TNC}>Term & Cond</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem className="mr-2">
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="start"
							className="rounded-xl border-[0.5px]"
						>
							<DropdownMenuItem>
								<Link
									href={PATH.URL.EVENT}
									className="flex justify-start items-center gap-x-2"
								>
									<AppIcon icon="arrow-right" />
									<span>Event</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									href={PATH.URL.QNA}
									className="flex justify-start items-center gap-x-2"
								>
									<AppIcon icon="arrow-right" />
									<span>Tanya Jawab</span>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
