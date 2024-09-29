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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@shared/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Lead {
	id: number;
	name: string;
	email: string;
	status:
		| "New"
		| "Contacted"
		| "Qualified"
		| "Proposal"
		| "Negotiation"
		| "Closed";
	source: string;
	createdAt: Date;
}

export function Leads() {
	const [leads, setLeads] = useState<Lead[]>([
		{
			id: 1,
			name: "John Doe",
			email: "john@example.com",
			status: "New",
			source: "Website",
			createdAt: new Date(2023, 5, 1),
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane@example.com",
			status: "Contacted",
			source: "LinkedIn",
			createdAt: new Date(2023, 5, 15),
		},
		{
			id: 3,
			name: "Bob Johnson",
			email: "bob@example.com",
			status: "Qualified",
			source: "Referral",
			createdAt: new Date(2023, 6, 1),
		},
		{
			id: 4,
			name: "Alice Brown",
			email: "alice@example.com",
			status: "Proposal",
			source: "Conference",
			createdAt: new Date(2023, 6, 10),
		},
		{
			id: 5,
			name: "Charlie Wilson",
			email: "charlie@example.com",
			status: "Negotiation",
			source: "Webinar",
			createdAt: new Date(2023, 7, 1),
		},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState<string>("all");

	const filteredLeads = leads.filter(
		(lead) =>
			(lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
				lead.source.toLowerCase().includes(searchTerm.toLowerCase())) &&
			(statusFilter === "all" || lead.status === statusFilter),
	);

	const handleDeleteLead = (id: number) => {
		setLeads(leads.filter((lead) => lead.id !== id));
	};

	const navigate = useNavigate();
	return (
		<div className="container mx-auto p-4">
			<HeaderScreen
				title="All Leads"
				description="Manage and track your developer leads"
			/>
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<div>
							<CardTitle>All Leads</CardTitle>
							<CardDescription>
								Manage and track your developer leads
							</CardDescription>
						</div>
						<Button onClick={() => navigate(ROUTES.CREATE_LEAD)}>
							<Icon name="plus" className="mr-2 h-4 w-4" /> Add New Lead
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-center mb-4 space-x-2">
						<div className="relative flex-1">
							{/* <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" /> */}
							<Input
								placeholder="Search leads..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								// className="pl-8"
							/>
						</div>
						<Select value={statusFilter} onValueChange={setStatusFilter}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Filter by status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Statuses</SelectItem>
								<SelectItem value="New">New</SelectItem>
								<SelectItem value="Contacted">Contacted</SelectItem>
								<SelectItem value="Qualified">Qualified</SelectItem>
								<SelectItem value="Proposal">Proposal</SelectItem>
								<SelectItem value="Negotiation">Negotiation</SelectItem>
								<SelectItem value="Closed">Closed</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Source</TableHead>
								<TableHead>Created At</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredLeads.map((lead) => (
								<TableRow key={lead.id}>
									<TableCell className="font-medium">{lead.name}</TableCell>
									<TableCell>{lead.email}</TableCell>
									<TableCell>
										<span
											className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
												lead.status === "New"
													? "bg-blue-100 text-blue-800"
													: lead.status === "Contacted"
														? "bg-yellow-100 text-yellow-800"
														: lead.status === "Qualified"
															? "bg-green-100 text-green-800"
															: lead.status === "Proposal"
																? "bg-purple-100 text-purple-800"
																: lead.status === "Negotiation"
																	? "bg-orange-100 text-orange-800"
																	: "bg-gray-100 text-gray-800"
											}`}
										>
											{lead.status}
										</span>
									</TableCell>
									<TableCell>{lead.source}</TableCell>
									<TableCell>{lead.createdAt.toLocaleDateString()}</TableCell>
									<TableCell className="text-right">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" className="h-8 w-8 p-0">
													<span className="sr-only">Open menu</span>

													<Icon name="dots_horizontal" className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuItem>View details</DropdownMenuItem>
												<DropdownMenuItem>Edit lead</DropdownMenuItem>
												<DropdownMenuItem>Change status</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													onClick={() => handleDeleteLead(lead.id)}
												>
													Delete lead
												</DropdownMenuItem>
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
						Showing {filteredLeads.length} of {leads.length} leads
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
