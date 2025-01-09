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
				<AppIcon icon="download" />
				<BreadcrumbItem className="mr-2">
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1">
							<BreadcrumbEllipsis className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem>
								<Link href={PATH.URL.EVENT}>Event</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href={PATH.URL.QNA}>Tanya Jawab</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
