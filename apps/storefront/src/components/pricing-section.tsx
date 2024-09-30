export function PricingSection() {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			{/* <!-- Title --> */}
			<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
					Find the right plan for your business
				</h2>
				<p className="mt-1 text-gray-600 dark:text-neutral-400">
					Pay as you go service, cancel anytime.
				</p>
			</div>
			{/* <!-- End Title --> */}

			{/* <!-- Grid --> */}
			<div className="relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,theme(colors.gray.300),transparent)] dark:before:bg-[radial-gradient(closest-side,theme(colors.neutral.600),transparent)] mt-12">
				<div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
					{/* <!-- Card --> */}
					<div className="flex flex-col h-full text-center">
						<div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
							<h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
								Free
							</h4>
						</div>

						<div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
							<span className="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
								Free
							</span>
						</div>

						<div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
							<ul className="space-y-2.5 text-center text-sm">
								<li className="text-gray-800 dark:text-neutral-400">
									50 leads
								</li>

								<li className="text-gray-800 dark:text-neutral-400">
									500 emails per month
								</li>

								<li className="text-gray-800 dark:text-neutral-400" />
							</ul>
						</div>

						<div className="bg-white py-8 px-8 dark:bg-neutral-900">
							<a
								className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
								href="/"
							>
								Sign up
							</a>
						</div>
					</div>
					{/* <!-- End Card --> */}

					{/* <!-- Card --> */}
					<div className="flex flex-col h-full text-center">
						<div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
							<h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
								Startup
							</h4>
						</div>

						<div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
							<span className="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
								<span className="font-bold text-2xl -me-2">$</span>
								39
							</span>
						</div>

						<div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
							<ul className="space-y-2.5 text-center text-sm">
								<li className="text-gray-800 dark:text-neutral-400">
									Unlimited leads
								</li>

								<li className="text-gray-800 dark:text-neutral-400">
									5000 emails per month
								</li>

								<li className="text-gray-800 dark:text-neutral-400">
									Priority support
								</li>
							</ul>
						</div>

						<div className="bg-white py-8 px-8 dark:bg-neutral-900">
							<a
								className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
								href="/"
							>
								Sign up
							</a>
						</div>
					</div>
					{/* <!-- End Card --> */}

					{/* <!-- Card --> */}
					<div className="flex flex-col h-full text-center">
						<div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
							<h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
								Indie Hacker
							</h4>
						</div>

						<div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
							<span className="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
								<span className="font-bold text-2xl -me-2">$</span>
								19
							</span>
						</div>

						<div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
							<ul className="space-y-2.5 text-center text-sm">
								<li className="text-gray-800 dark:text-neutral-400">
									1000 leads
								</li>

								<li className="text-gray-800 dark:text-neutral-400">
									1000 emails per month
								</li>

								<li className="text-gray-800 dark:text-neutral-400">
									Priority support
								</li>
							</ul>
						</div>

						<div className="bg-white py-8 px-8 dark:bg-neutral-900">
							<a
								className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
								href="/"
							>
								Sign up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
