import AppIcon from "@/hooks/func/use_icon";
import React, { Fragment } from "react";

export default function Benefit() {
	return (
		<Fragment>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="bg-white border-[0.5px] border-neutral-200 flex relative overflow-hidden justify-center items-center rounded-2xl min-h-32 p-4">
					<div>
						<div>
							<AppIcon icon="info" className="h-8 w-8 mx-auto" />
						</div>
						<div className="text-center font-bold duration-500">Ilmu</div>
						<div className="line-clamp-3 text-center duration-500 text-xs text-neutral-700">
							Akses pengetahuan terbaru dalam teknologi.
						</div>
						<div className="w-1 h-8 rounded-full absolute bg-neutral-200 top-4 right-4" />
					</div>
				</div>
				<div className="bg-white border-[0.5px] border-neutral-200 flex relative overflow-hidden justify-center items-center rounded-2xl min-h-32 p-4">
					<div>
						<div>
							<AppIcon icon="shield-user" className="h-8 w-8 mx-auto" />
						</div>
						<div className="text-center font-bold duration-500">Teman</div>
						<div className="line-clamp-3 text-center duration-500 text-xs text-neutral-700">
							Perluas jaringan dengan sesama profesional IT dan bertukar ide.
						</div>
						<div className="w-1 h-8 rounded-full absolute bg-neutral-200 top-4 left-4" />
					</div>
				</div>
				<div className="bg-white border-[0.5px] border-neutral-200 flex relative overflow-hidden justify-center items-center rounded-2xl min-h-32 p-4">
					<div>
						<div>
							<AppIcon icon="users-group" className="h-8 w-8 mx-auto" />
						</div>
						<div className="text-center font-bold duration-500">Berkembang</div>
						<div className="line-clamp-3 text-center duration-500 text-xs text-neutral-700">
							Meningkatkan keterampilan dalam lingkungan yang mendukung.
						</div>
						<div className="w-1 h-8 rounded-full absolute bg-neutral-200 top-4 right-4" />
					</div>
				</div>
				<div className="bg-white border-[0.5px] border-neutral-200 flex relative overflow-hidden justify-center items-center rounded-2xl min-h-32 p-4">
					<div>
						<div>
							<AppIcon icon="airbuds" className="h-8 w-8 mx-auto" />
						</div>
						<div className="text-center font-bold duration-500">Mentoring</div>
						<div className="line-clamp-3 text-center duration-500 text-xs text-neutral-700">
							Menerima bimbingan langsung dari profesional IT yang
							berpengalaman.
						</div>
					</div>
					<div className="w-1 h-8 rounded-full absolute bg-neutral-200 top-4 left-4" />
				</div>
			</div>
		</Fragment>
	);
}
