import { useState } from "react";

import { ROUTES } from "@/config/routes";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	HeaderScreen,
	Icon,
	Input,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@shared/ui";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface Campaign {
	id: number;
	name: string;
	description: string;
	targetAudience: string;
	startDate: Date;
	endDate: Date;
	status: "Active" | "Completed" | "Upcoming";
	leads: number;
}

export function Campaigns() {
	const [campaigns] = useState<Campaign[]>([
		{
			id: 1,
			name: "Summer Code Fest",
			description: "Engaging developers with summer coding challenges",
			targetAudience: "Full Stack Developers",
			startDate: new Date(2023, 5, 1),
			endDate: new Date(2023, 7, 31),
			status: "Active",
			leads: 250,
		},
		{
			id: 2,
			name: "AI Workshop Series",
			description: "Workshops on integrating AI in applications",
			targetAudience: "Data Scientists",
			startDate: new Date(2023, 8, 1),
			endDate: new Date(2023, 11, 31),
			status: "Upcoming",
			leads: 0,
		},
		{
			id: 3,
			name: "Mobile Dev Conference",
			description: "Annual conference for mobile developers",
			targetAudience: "Mobile Developers",
			startDate: new Date(2023, 2, 15),
			endDate: new Date(2023, 2, 17),
			status: "Completed",
			leads: 500,
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");

	const filteredCampaigns = campaigns.filter(
		(campaign) =>
			campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			campaign.description.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const navigate = useNavigate();

	return (
		<div className="container mx-auto p-4">
			<HeaderScreen
				title="Campaigns"
				description="Manage and monitor your lead generation campaigns"
			/>
			<Card>
				<CardHeader>
					<div className="flex justify-between sm:items-center flex-col gap-3 sm:gap-0 sm:flex-row items-start">
						<div>
							<CardTitle>All Campaigns</CardTitle>
							<CardDescription>
								Manage and monitor your lead generation campaigns
							</CardDescription>
						</div>
						<Button onClick={() => navigate(ROUTES.CREATE_CAMPAIGN)}>
							<Icon name="plus" className="mr-2 h-4 w-4" /> Create Campaign
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-center mb-4">
						<Input
							placeholder="Search campaigns..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="max-w-sm"
						/>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead className="hidden xl:table-cell">Audience</TableHead>
								<TableHead className="hidden lg:table-cell">
									Start Date
								</TableHead>
								<TableHead className="hidden lg:table-cell">End Date</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="hidden sm:table-cell">Leads</TableHead>
								<TableHead className="text-right hidden min-[450px]:table-cell">
									Actions
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredCampaigns.map((campaign) => (
								<TableRow key={campaign.id}>
									<TableCell className="font-medium">{campaign.name}</TableCell>
									<TableCell className="hidden xl:table-cell">
										{campaign.targetAudience}
									</TableCell>
									<TableCell className="hidden lg:table-cell">
										{format(campaign.startDate, "MMM d, yyyy")}
									</TableCell>
									<TableCell className="hidden lg:table-cell">
										{format(campaign.endDate, "MMM d, yyyy")}
									</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
												campaign.status === "Active"
													? "bg-green-100 text-green-800"
													: campaign.status === "Completed"
														? "bg-gray-100 text-gray-800"
														: "bg-yellow-100 text-yellow-800"
											}`}
										>
											{campaign.status}
										</span>
									</TableCell>
									<TableCell className="hidden sm:table-cell">
										{campaign.leads}
									</TableCell>
									<TableCell className="text-right  hidden min-[450px]:table-cell">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" className="h-8 w-8 p-0">
													<span className="sr-only">Open menu</span>
													<Icon name="dots_vertical" className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem>View details</DropdownMenuItem>
												<DropdownMenuItem>Edit campaign</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>Delete campaign</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-muted-foreground">
						Showing {filteredCampaigns.length} of {campaigns.length} campaigns
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
