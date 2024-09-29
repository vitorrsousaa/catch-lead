import { Icon } from "@shared/ui";

export function Footer() {
	return (
		<footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
			<hr className="mt-8 mb-8" />
			{/* <!-- Grid --> */}
			<div className="text-center">
				<div>
					<a
						className="flex-none text-xl font-semibold text-black dark:text-white"
						href="/"
						aria-label="Brand"
					>
						Brand
					</a>
				</div>
				{/* <!-- End Col --> */}

				<div className="mt-3">
					<p className="text-gray-500 dark:text-neutral-500">
						We're part of the{" "}
						<a
							className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
							href="/"
						>
							Htmlstream
						</a>{" "}
						family.
					</p>
					<p className="text-gray-500 dark:text-neutral-500">
						© 2024 Preline Labs.
					</p>
				</div>

				{/* <!-- Social Brands --> */}
				<div className="mt-3 space-x-2">
					<a
						className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
						href="/"
					>
						<Icon name="github" />
					</a>
				</div>
				{/* <!-- End Social Brands --> */}
			</div>
			{/* <!-- End Grid --> */}
		</footer>
	);
}
