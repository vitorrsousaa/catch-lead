import { ROUTES } from "@/config/routes";
import type { IconProps } from "@shared/ui";

interface NavSectionsProps {
	label: string;
	items: NavItemsProps[];
}

interface NavItemsProps {
	href: string;
	icon: IconProps["name"];
	label: string;
}

export const NAV_ITEMS: NavSectionsProps[] = [
	{
		label: "General",
		items: [
			{
				href: ROUTES.DASHBOARD,
				icon: "home",
				label: "Home",
			},
			{
				href: ROUTES.CAMPAIGNS,
				icon: "rocket",
				label: "Campaigns",
			},
			{
				href: ROUTES.LEADS,
				icon: "person",
				label: "Leads",
			},
		],
	},
	{
		label: "My account",
		items: [
			{ href: ROUTES.SETTINGS, icon: "settings", label: "Settings" },
			{ href: ROUTES.SUBSCRIPTION, icon: "id_card", label: "Subscription" },
		],
	},
];
