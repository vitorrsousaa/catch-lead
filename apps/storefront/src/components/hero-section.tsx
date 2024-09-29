import { Icon } from "@shared/ui";

export function HeroSection() {
	return (
		<div className="bg-gradient-to-b from-violet-600/10 via-transparent">
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
				<div className="flex justify-center">
					<a
						className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-muted-foreground p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10"
						href="/./figma.html"
					>
						<p className="me-2 text-sm">Catch Lead for Developers is live!</p>
						<span className="py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-sm">
							<Icon name="rocket" />
						</span>
					</a>
				</div>

				<div className="max-w-3xl text-center mx-auto">
					<h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
						Now it's easier than ever to capture leads
					</h1>
				</div>

				<div className="max-w-3xl text-center mx-auto">
					<p className="text-lg text-muted-foreground">
						Catch Lead is a powerful platform designed specifically for
						developers, built with the latest technologies to streamline lead
						capture.
					</p>
				</div>

				<div className="text-center">
					<a
						className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-primary to-gray-200 shadow-lg shadow-transparent hover:shadow-gray-700/50 border border-transparent text-primary-foreground text-sm font-medium rounded-full focus:outline-none focus:shadow-gray-700/50 py-3 px-6"
						href="/"
					>
						Get started
						<Icon name="chevron_right" />
					</a>
				</div>
			</div>
		</div>
	);
}
