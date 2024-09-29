import { ROUTES } from "@/config/routes";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Campaigns } from "@/screens/app/campaigns";
import { CreateCampaign } from "@/screens/app/create-campaign";
import { CreateLead } from "@/screens/app/create-lead";
import { Dashboard } from "@/screens/app/dashboard";
import { Leads } from "@/screens/app/leads";
import { Settings } from "@/screens/app/settings";
import { Subscription } from "@/screens/app/subscription";
import { GoogleCallback } from "@/screens/auth/google-callback";
import { Signin } from "@/screens/auth/signin";
import { NotFound } from "@/screens/not-found";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./auth-guard";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthGuard isPrivate={false} />}>
					<Route index element={<Navigate to={ROUTES.SIGNIN} replace />} />
					<Route path={ROUTES.SIGNIN} element={<Signin />} />
					<Route path={ROUTES.GOOGLE_CALLBACK} element={<GoogleCallback />} />
				</Route>
				<Route path="/" element={<AuthGuard isPrivate={true} />}>
					<Route path="/" element={<DashboardLayout />}>
						<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
						<Route path={ROUTES.CREATE_CAMPAIGN} element={<CreateCampaign />} />
						<Route path={ROUTES.CAMPAIGNS} element={<Campaigns />} />
						<Route path={ROUTES.LEADS} element={<Leads />} />
						<Route path={ROUTES.CREATE_LEAD} element={<CreateLead />} />
						<Route path={ROUTES.SETTINGS} element={<Settings />} />
						<Route path={ROUTES.SUBSCRIPTION} element={<Subscription />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
