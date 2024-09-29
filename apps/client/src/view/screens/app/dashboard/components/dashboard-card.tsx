import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Icon,
	type IconProps,
} from "@shared/ui";

interface DashboardCardProps {
	title: string;
	icon: IconProps["name"];
	value: string;
	percentage: string;
}

export function DashboardCard(props: DashboardCardProps) {
	const { title, icon, value, percentage } = props;
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
				<CardTitle className="text-sm font-medium ">{title}</CardTitle>
				<Icon name={icon} className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-muted-foreground">
					{percentage} from last month
				</p>
			</CardContent>
		</Card>
	);
}
