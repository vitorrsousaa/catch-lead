import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Icon,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@shared/ui";

export function DashboardHeader() {
	return (
		<header className="px-4 lg:px-6 h-14 hidden md:flex items-center">
			<nav className="ml-auto flex items-center gap-4 sm:gap-6">
				<Button variant="ghost" size="icon">
					<Icon name="bell" className="h-4 w-4" />
					<span className="sr-only">Notifications</span>
				</Button>
				<Popover>
					<PopoverTrigger>
						<Avatar className="border rounded-full">
							<AvatarImage src="/placeholder-user.jpg" alt="User" />
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
					</PopoverTrigger>
					<PopoverContent
						sideOffset={8}
						className="bg-card p-2 gap-1 flex flex-col shadow-none rounded-xl w-[246px]"
					>
						<div className="flex flex-col gap-2 p-2">
							<span className="font-semibold">John Doe</span>
						</div>
					</PopoverContent>
				</Popover>
			</nav>
		</header>
	);
}
