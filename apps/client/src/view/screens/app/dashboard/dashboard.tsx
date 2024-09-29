import { ROUTES } from "@/config/routes";
import { useGetGrowthTotalLeads } from "@/hooks/lead";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Icon,
	Skeleton,
} from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { DashboardCard } from "./components/dashboard-card";
import { DashboardHeader } from "./components/dashboard-header";
import { DashboardLeadAcquisition } from "./components/dashboard-lead-acquisition";
import { DashboardRecentLeads } from "./components/dashboard-recent-leads";

export function Dashboard() {
	const navigate = useNavigate();

	// Conversion Rate = (Number of Conversions / Total Number of Leads) * 100

	// For example, if you have 100 leads and 10 of them become customers, your conversion rate would be:

	const { isErrorGrowthingTotal, isFetchingGrowthTotal, isLoadingGrowthTotal } =
		useGetGrowthTotalLeads();

	const isLoadingAnalytics = isLoadingGrowthTotal;

	return (
		<div className="flex flex-col min-h-screen">
			<DashboardHeader />
			<main className="flex-1 p-4 md:p-6 space-y-6">
				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
					{isLoadingAnalytics ? (
						<>
							<Skeleton className="w-full rounded-xl h-40" />
							<Skeleton className="w-full rounded-xl h-40" />
							<Skeleton className="w-full rounded-xl h-40" />
						</>
					) : (
						<>
							<DashboardCard
								title="Total Leads"
								icon="person"
								value="1,234"
								percentage="+20.1%"
								isError={isErrorGrowthingTotal}
								isFetching={isFetchingGrowthTotal}
							/>
							<DashboardCard
								title="Conversion Rate"
								icon="update"
								value="12.5%"
								percentage="+2.3%"
							/>
							<DashboardCard
								title="Active Campaigns"
								icon="rocket"
								value="3"
								percentage="2 ending this week"
							/>
						</>
					)}
				</div>
				<div className="grid gap-4 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-7">
					<DashboardRecentLeads className="lg:col-span-5 xl:col-span-4" />
					<DashboardLeadAcquisition className="lg:col-span-5 xl:col-span-3" />
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
						<CardDescription>Manage your leads and campaigns</CardDescription>
					</CardHeader>
					<CardContent className="flex gap-4 flex-col lg:flex-row">
						<Button onClick={() => navigate(ROUTES.CREATE_LEAD)}>
							<Icon name="plus" className="mr-2 h-4 w-4" /> Add New Lead
						</Button>
						<Button variant="outline" onClick={() => navigate(ROUTES.LEADS)}>
							View All Leads
						</Button>
						<Button
							variant="outline"
							onClick={() => navigate(ROUTES.CREATE_CAMPAIGN)}
						>
							Create Campaign
						</Button>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
