import { Link } from "react-router-dom";

import { ROUTES } from "@/config/routes";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Icon,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@shared/ui";
import { NAV_ITEMS } from "./nav-items";
import { useSidebarHook } from "./sidebar.hook";

export function Sidebar() {
	const { email, name, picture, pathname, signout } = useSidebarHook();

	return (
		<aside className="flex fixed w-[280px] inset-y-2 left-2 z-10 flex-col sm:rounded-xl sm:border p-4 sm:bg-muted/30">
			<nav className="flex flex-col gap-4 px-2 pt-1 w-full">
				<span className="text-lg font-semibold">Catch Lead</span>

				<div className="w-full flex flex-col gap-6">
					{NAV_ITEMS.map((section) => (
						<div className="w-full flex flex-col" key={section.label}>
							<span className="text-muted-foreground text-sm mb-2">
								{section.label}
							</span>

							<div className="w-full space-y-2">
								{section.items.map((item) => (
									<Button
										key={item.label}
										variant="ghost"
										className={`w-full p-0 ${
											pathname === item.href
												? "bg-primary/10 text-accent-foreground hover:bg-primary/20"
												: ""
										}`}
									>
										<Link
											to={item.href}
											className="w-full flex items-center gap-2 px-4 py-2"
										>
											<Icon name={item.icon} />
											{item.label}
										</Link>
									</Button>
								))}
							</div>
						</div>
					))}
				</div>
			</nav>

			<Popover>
				<PopoverTrigger className="transition-colors hover:bg-accent border w-full mt-auto flex items-center gap-2 p-2 rounded-xl">
					<Avatar className="border rounded-full">
						<AvatarImage src={picture} alt={name} />
						<AvatarFallback className="rounded-none">
							{name?.charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>

					<div className="flex flex-col items-start">
						<span className="font-semibold text-sm">{name}</span>
						<small className="text-muted-foreground text-xs">{email}</small>
					</div>

					<Icon name="double_arrow" className="ml-auto w-5 h-5" />
				</PopoverTrigger>

				<PopoverContent
					sideOffset={16}
					className="bg-card p-2 gap-1 flex flex-col shadow-none rounded-xl w-[246px]"
				>
					<Button variant="ghost" className="justify-start p-0">
						<Link
							to={ROUTES.SETTINGS}
							className="px-4 w-full h-full flex items-center justify-start font-normal"
						>
							Settings
						</Link>
					</Button>

					<AlertDialog>
						<AlertDialogTrigger>
							<Button
								variant="ghost"
								className="justify-start px-4 font-normal w-full"
							>
								Logout
							</Button>
						</AlertDialogTrigger>

						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Você deseja realmente sair?</AlertDialogTitle>
								<AlertDialogDescription>
									Caso sair, esperamos ver você novamente em breve, até mais!!
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction onClick={signout}>Logout</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</PopoverContent>
			</Popover>
		</aside>
	);
}
