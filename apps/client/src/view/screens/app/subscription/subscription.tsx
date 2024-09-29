import {
	Alert,
	AlertDescription,
	AlertTitle,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	HeaderScreen,
	Icon,
	Progress,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@shared/ui";
import { useState } from "react";

const plans = [
	{
		name: "Free",
		price: 0,
		features: ["Up to 5 leads", "Lead capture via form", "Basic reports"],
		limits: {
			leads: 100,
			campaigns: 1,
		},
	},
	{
		name: "Pro",
		price: 15,
		features: [
			"Unlimited leads",
			"Lead capture via form and API",
			"Advanced reports",
			"Export leads in CSV",
			"Priority support",
			"Unlimited campaigns",
		],
		limits: {
			leads: 3000,
			campaigns: 3,
		},
	},
];

export function Subscription() {
	const [currentPlan, setCurrentPlan] = useState("Free");
	const [leadsUsed] = useState(5);
	const [campaignsUsed] = useState(1);

	const selectedPlan = plans.find((plan) => plan.name === currentPlan);

	const handleUpgrade = () => {
		// Lógica para atualizar o plano
		setCurrentPlan("Pro");
	};

	return (
		<div className="space-y-6">
			<HeaderScreen
				title="Subscription"
				description="Manage your subscription and billing information"
			/>

			<Card>
				<CardHeader className="flex justify-between flex-row items-center">
					<div>
						<CardTitle>Your current plan: {currentPlan}</CardTitle>
						<CardDescription>
							{currentPlan === "Free"
								? "Start capturing leads for free"
								: "Enjoy all premium features"}
						</CardDescription>
					</div>
					{currentPlan === "Free" && (
						<Button onClick={handleUpgrade}>Upgrade to Pro</Button>
					)}
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<Label>Leads Used</Label>
							<span>
								{leadsUsed} /{" "}
								{selectedPlan?.limits.leads === Number.POSITIVE_INFINITY
									? "Ilimitado"
									: selectedPlan?.limits.leads}
							</span>
						</div>
						<Progress
							value={(leadsUsed / (selectedPlan?.limits.leads || 1)) * 100}
							className="h-2"
						/>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<Label>Active Campaigns</Label>
							<span>
								{campaignsUsed} /{" "}
								{selectedPlan?.limits.campaigns === Number.POSITIVE_INFINITY
									? "Ilimitado"
									: selectedPlan?.limits.campaigns}
							</span>
						</div>
						<Progress
							value={
								(campaignsUsed / (selectedPlan?.limits.campaigns || 1)) * 100
							}
							className="h-2"
						/>
					</div>
					{currentPlan === "Free" &&
						leadsUsed >= (selectedPlan?.limits?.leads || 1) && (
							<Alert variant="destructive">
								<AlertTitle>Leads Limit Reached</AlertTitle>
								<AlertDescription>
									You have reached the lead limit of the free plan. Upgrade to
									the Pro plan to continue capturing leads.
								</AlertDescription>
							</Alert>
						)}
				</CardContent>
			</Card>

			<div className="grid md:grid-cols-2 gap-6">
				{plans.map((plan) => (
					<Card key={plan.name}>
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<CardDescription>
								{plan.price === 0 ? "Free" : `$ ${plan.price}/month`}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{plan.features.map((feature) => (
									<li
										key={Math.random().toString()}
										className="flex items-center"
									>
										<Icon
											name="check"
											className="h-4 w-4 mr-2 text-green-500"
										/>
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							{currentPlan === plan.name ? (
								<Button disabled className="w-full">
									Current Plan
								</Button>
							) : (
								<Button
									className="w-full"
									onClick={handleUpgrade}
									variant={plan.name === "Pro" ? "default" : "outline"}
								>
									{plan.name === "Pro" ? "Upgrade" : "Downgrade"}
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>

			{currentPlan === "Pro" && (
				<Card>
					<CardHeader>
						<CardTitle>Billing Information</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center space-x-4">
							<Icon name="id_card" className="h-6 w-6" />
							<div>
								<p className="font-medium">Visa ending in 4242</p>
								<p className="text-sm text-muted-foreground">Expires 12/2024</p>
							</div>
							<Button variant="outline" size="sm">
								Update
							</Button>
						</div>
						<div>
							<h3 className="font-semibold mb-2">Next Charge</h3>
							<p>Your next payment of R$ 49.00 will be on 06/15/2023</p>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

function Label({ children }: { children: React.ReactNode }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span className="flex items-center cursor-help">
						{children}
						<Icon name="questionMark" className="h-4 w-4 ml-1" />
					</span>
				</TooltipTrigger>
				<TooltipContent>
					<p>This is the current usage relative to your plan limit.</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
