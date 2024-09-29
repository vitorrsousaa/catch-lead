import { Icon } from "@shared/ui";

export function IconFeatures() {
	return (
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
				{/* <!-- Icon Block --> */}
				<div>
					<div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
						<Icon name="link1" className="h-6 w-6 text-blue-600" />
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
							Optimized for Developer
						</h3>
						<p className="mt-1 text-gray-600 dark:text-neutral-400">
							Integrates into your existing tools for efficient lead capture.
						</p>
					</div>
				</div>
				{/* <!-- End Icon Block --> */}

				{/* <!-- Icon Block --> */}
				<div>
					<div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
						<Icon name="slider" className="h-6 w-6 text-blue-600" />
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
							Flexible Customization
						</h3>
						<p className="mt-1 text-gray-600 dark:text-neutral-400">
							Easily adapt the platform to meet your lead collection needs.
						</p>
					</div>
				</div>
				{/* <!-- End Icon Block --> */}

				{/* <!-- Icon Block --> */}
				<div>
					<div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
						<Icon name="file_text" className="h-6 w-6 text-blue-600" />
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
							Clear API Documentation
						</h3>
						<p className="mt-1 text-gray-600 dark:text-neutral-400">
							Comprehensive guides to help you maximize the platform's
							potential.
						</p>
					</div>
				</div>
				{/* <!-- End Icon Block --> */}

				{/* <!-- Icon Block --> */}
				<div>
					<div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
						<Icon name="questionMark" className="h-6 w-6 text-blue-600" />
					</div>
					<div className="mt-5">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
							Developer Support
						</h3>
						<p className="mt-1 text-gray-600 dark:text-neutral-400">
							Dedicated support whenever you need assistance.
						</p>
					</div>
				</div>
				{/* <!-- End Icon Block --> */}
			</div>
		</div>
	);
}
