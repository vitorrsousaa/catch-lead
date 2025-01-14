import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	cn,
	Icon,
	Spinner,
	type IconProps,
} from "@shared/ui";

interface DashboardCardProps {
	title: string;
	icon: IconProps["name"];
	value: string;
	percentage: string;
	isError?: boolean;
	isFetching?: boolean;
}

export function DashboardCard(props: DashboardCardProps) {
	const { title, icon, value, percentage, isFetching, isError } = props;

	return (
		<Card className={cn(isError && "border-destructive bg-destructive/10")}>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
				<CardTitle className="text-sm font-medium ">{title}</CardTitle>
				{isFetching ? (
					<Spinner className="h-4 w-4" />
				) : (
					<Icon name={icon} className="h-4 w-4 text-muted-foreground" />
				)}
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
