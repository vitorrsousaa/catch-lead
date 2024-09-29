import { Icon, type IconProps } from "@shared/ui";

export function FeatureNav() {
	const features = [
		{
			icon: "cube",
			title: "All-in-one lead management",
			description:
				"Effortlessly manage all your leads in one place, from capture to conversion.",
			id: "tabs-with-card-1",
			tabId: "tabs-with-card-item-1",
		},
		{
			icon: "layers",
			title: "Seamless integration with developer tools",
			description:
				"Effortlessly connect with the tools you already use, making lead capture a natural part of your workflow.",
			id: "tabs-with-card-2",
			tabId: "tabs-with-card-item-2",
		},
		{
			icon: "update",
			title: "Advanced analytics for lead performance",
			description:
				"Gain insights into your lead generation efforts with detailed analytics and metrics tailored for developers.",
			id: "tabs-with-card-3",
			tabId: "tabs-with-card-item-3",
		},
	];

	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<nav
				className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
				aria-label="Tabs"
				role="tablist"
				aria-orientation="horizontal"
			>
				{features.map((feature) => (
					<button
						key={feature.title}
						type="button"
						className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 active"
						id={feature.tabId}
						aria-selected="true"
						data-hs-tab={`#${feature.id}`}
						aria-controls={feature.id}
						role="tab"
					>
						<Icon
							name={feature.icon as IconProps["name"]}
							className="w-6 h-6 text-blue-600 dark:text-blue-500"
						/>
						<span className="mt-5">
							<span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
								{feature.title}
							</span>
							<small className="hidden lg:block mt-2 text-muted-foreground">
								{feature.description}
							</small>
						</span>
					</button>
				))}
			</nav>

			{/* <!-- Tab Content --> */}
			<div className="mt-12 md:mt-16">
				<div
					id="tabs-with-card-1"
					role="tabpanel"
					aria-labelledby="tabs-with-card-item-1"
				>
					{/* <!-- Devices --> */}
					<div className="max-w-[1140px] lg:pb-32 relative">
						{/* <!-- Mobile Device --> */}
						<figure className="hidden absolute bottom-0 start-0 z-[2] max-w-full w-60 h-auto mb-20 ms-20 lg:block">
							<div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] dark:bg-neutral-700">
								<img
									className="max-w-full rounded-[1.25rem] h-auto"
									src="img9.jpg"
									alt="Features"
								/>
							</div>
						</figure>
						{/* <!-- End Mobile Device --> */}

						{/* <!-- Browser Device --> */}
						<figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
							<div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-neutral-800 dark:border-neutral-700">
								<div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
									<span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700" />
									<span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700" />
									<span className="size-2 bg-gray-200 rounded-full dark:bg-neutral-700" />
								</div>
								<div className="flex justify-center items-center size-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-neutral-700 dark:text-neutral-200">
									www.catchlead.com
								</div>
							</div>

							<div className="bg-gray-800 rounded-b-lg">
								<img
									className="max-w-full h-auto rounded-b-lg"
									src="img8.jpg"
									alt="Features"
								/>
							</div>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
