import { ASSETS } from "@/constant/assets";
import { AnimatedTestimonials } from "@/interfaces/components/ui/animated-testimonials";
import { Fragment } from "react";

export function MemberDedicated() {
	const testimonials = [
		{
			quote:
				"Diadakan bersama pemuda kreatif Ponorogo, Mataraman[DEV] menggelar talkshow di fans cafe & resto ponorogo",
			name: "Artificial Intelligence - Kolaborasi atau Refalitas",
			designation: "Talkshow",
			src: ASSETS.PUBLIC.COVER1,
		},
		// {
		//   quote: "Sebab tumbuh itu dipastikan. Mataraman[DEV] menjadi penting untuk para engineer baik yang ingin memulai atau sudah menjadi profesi.",
		//   name: "Wahyu Agus Arifin",
		//   designation: "Senior Frontend Engineer",
		//   src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// },
		// {
		//   quote:
		//     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
		//   name: "Emily Watson",
		//   designation: "Operations Director at CloudScale",
		//   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// },
		// {
		//   quote:
		//     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
		//   name: "James Kim",
		//   designation: "Engineering Lead at DataPro",
		//   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// },
		// {
		//   quote:
		//     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
		//   name: "Lisa Thompson",
		//   designation: "VP of Technology at FutureNet",
		//   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// },
	];
	return (
		<Fragment>
			<AnimatedTestimonials testimonials={testimonials} />
		</Fragment>
	);
}
