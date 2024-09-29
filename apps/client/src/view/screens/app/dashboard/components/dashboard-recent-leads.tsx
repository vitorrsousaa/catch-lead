import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	cn,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@shared/ui";
import { useState } from "react";

interface DashboardRecentLeadsProps {
	className?: string;
}

export function DashboardRecentLeads({ className }: DashboardRecentLeadsProps) {
	const [leads] = useState([
		{
			id: 1,
			name: "John Doe",
			email: "john@example.com",
			source: "TechCorp",
			status: "New",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane@example.com",
			source: "DevInc",
			status: "Contacted",
		},
		{
			id: 3,
			name: "Bob Johnson",
			email: "bob@example.com",
			source: "CodeCo",
			status: "Qualified",
		},
		{
			id: 4,
			name: "Steve Johnson",
			email: "steve@example.com",
			source: "CodeCo",
			status: "Qualified",
		},
		{
			id: 5,
			name: "Martin Johnson",
			email: "steve@example.com",
			source: "CodeCo",
			status: "Qualified",
		},
	]);

	return (
		<Card className={cn(className)}>
			<CardHeader>
				<CardTitle>Recent Leads</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead className="hidden sm:table-cell">source</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{leads.map((lead) => (
							<TableRow key={lead.id}>
								<TableCell>{lead.name}</TableCell>
								<TableCell>{lead.email}</TableCell>
								<TableCell className="hidden sm:table-cell">
									{lead.source}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
