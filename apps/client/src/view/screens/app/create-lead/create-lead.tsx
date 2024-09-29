import { ROUTES } from "@/config/routes";
import {
	Button,
	Calendar,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Icon,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@shared/ui";
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateLead() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("New");
	const [source, setSource] = useState("");
	const [notes, setNotes] = useState("");
	const [createdAt, setCreatedAt] = useState<Date | undefined>(new Date());

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send this data to your backend
		console.log({
			name,
			email,
			status,
			source,
			notes,
			createdAt,
		});

		navigate(ROUTES.LEADS);
		// After successful submission, redirect to the all leads page
		// router.push('/all-leads')
	};

	return (
		<div className="container mx-auto p-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Add New Lead</CardTitle>
					<CardDescription>
						Enter the details of the new developer lead
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="John Doe"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="john@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="status">Status</Label>
								<Select value={status} onValueChange={setStatus}>
									<SelectTrigger id="status">
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="New">New</SelectItem>
										<SelectItem value="Contacted">Contacted</SelectItem>
										<SelectItem value="Qualified">Qualified</SelectItem>
										<SelectItem value="Proposal">Proposal</SelectItem>
										<SelectItem value="Negotiation">Negotiation</SelectItem>
										<SelectItem value="Closed">Closed</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="source">Source</Label>
								<Input
									id="source"
									placeholder="Website, Referral, Conference, etc."
									value={source}
									onChange={(e) => setSource(e.target.value)}
								/>
							</div>
							<div className="grid gap-2 sm:col-span-2">
								<Label htmlFor="notes">Notes</Label>
								<Textarea
									id="notes"
									placeholder="Any additional information about the lead..."
									value={notes}
									onChange={(e) => setNotes(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<Label>Created At</Label>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={`w-full justify-start text-left font-normal ${
												!createdAt && "text-muted-foreground"
											}`}
										>
											<Icon name="calendar" className="mr-2 h-4 w-4" />
											{createdAt ? (
												format(createdAt, "PPP")
											) : (
												<span>Pick a date</span>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar
											mode="single"
											selected={createdAt}
											onSelect={setCreatedAt}
											// initialFocus
										/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-end gap-4">
					<Button variant="outline" onClick={() => navigate(-1)}>
						Cancel
					</Button>
					<Button type="submit" onClick={handleSubmit}>
						<Icon name="plus" className="mr-2 h-4 w-4" /> Add Lead
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
