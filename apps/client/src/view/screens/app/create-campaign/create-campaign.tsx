import { ROUTES } from "@/config/routes";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	HeaderScreen,
	Icon,
	Input,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@shared/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateCampaign() {
	const [campaignName, setCampaignName] = useState("");
	const [description, setDescription] = useState("");
	const [targetAudience, setTargetAudience] = useState("");
	const [startDate] = useState<Date>();
	const [endDate] = useState<Date>();

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send this data to your backend
		console.log({
			campaignName,
			description,
			targetAudience,
			startDate,
			endDate,
		});

		navigate(ROUTES.CAMPAIGNS);
		// Reset form or redirect user after submission
	};

	return (
		<div className="container mx-auto p-4">
			<HeaderScreen
				title="Create New Campaign"
				description="Set up a new campaign to capture developer leads"
			/>
			<Card>
				<CardHeader>
					<CardTitle>Create New Campaign</CardTitle>
					<CardDescription>
						Set up a new campaign to capture developer leads
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Campaign Name</Label>
								<Input
									id="name"
									placeholder="Enter campaign name"
									value={campaignName}
									onChange={(e) => setCampaignName(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									placeholder="Describe your campaign"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="target-audience">Target Audience</Label>
								<Select onValueChange={setTargetAudience} required>
									<SelectTrigger id="target-audience">
										<SelectValue placeholder="Select target audience" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="frontend">
											Frontend Developers
										</SelectItem>
										<SelectItem value="backend">Backend Developers</SelectItem>
										<SelectItem value="fullstack">
											Full Stack Developers
										</SelectItem>
										<SelectItem value="mobile">Mobile Developers</SelectItem>
										<SelectItem value="data">Data Scientists</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="start-date">Start Date</Label>
									<Input type="date" />
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="start-date">End Date</Label>
									<Input type="date" />
								</div>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex gap-2 justify-end">
					<Button variant="outline" onClick={() => navigate(-1)}>
						Cancel
					</Button>
					<Button type="submit" onClick={handleSubmit}>
						<Icon name="plus" className="mr-2 h-4 w-4" /> Create Campaign
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
