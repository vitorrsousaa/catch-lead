export function Testimonials() {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			{/* <!-- Grid --> */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* <!-- Card --> */}
				<div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" I'm absolutely floored by the level of care and attention to
								detail the team at HS have put into this theme and for one can
								guarantee that I will be a return customer. "
							</em>
						</p>
					</div>

					<div className="p-4 rounded-b-xl md:px-6">
						<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
							Nicole Grazioso
						</h3>
						<p className="text-sm text-gray-500 dark:text-neutral-500">
							Director Payments & Risk | HubSpot
						</p>
					</div>
				</div>
				{/* <!-- End Card --> */}

				{/* <!-- Card --> */}
				<div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" With Preline, we're able to easily track our performance in
								full detail. It's become an essential tool for us to grow and
								engage with our audience. "
							</em>
						</p>
					</div>

					<div className="p-4 rounded-b-xl md:px-6">
						<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
							Josh Tyson
						</h3>
						<p className="text-sm text-gray-500 dark:text-neutral-500">
							Product Manager | Capsule
						</p>
					</div>
				</div>
				{/* <!-- End Card --> */}

				{/* <!-- Card --> */}
				<div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
					<div className="flex-auto p-4 md:p-6">
						<p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
							<em>
								" In September, I will be using this theme for 2 years. I went
								through multiple updates and changes and I'm very glad to see
								the consistency and effort made by the team. "
							</em>
						</p>
					</div>

					<div className="p-4 rounded-b-xl md:px-6">
						<h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
							Luisa
						</h3>
						<p className="text-sm text-gray-500 dark:text-neutral-500">
							Senior Director of Operations | Fitbit
						</p>
					</div>
				</div>
				{/* <!-- End Card --> */}
			</div>
			{/* <!-- End Grid --> */}
		</div>
	);
}
