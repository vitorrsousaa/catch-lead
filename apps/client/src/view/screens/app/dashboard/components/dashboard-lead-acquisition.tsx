import { Card, CardContent, CardHeader, CardTitle, cn } from "@shared/ui";
import type { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const chartConfig: Record<string, ApexOptions> = {
	options: {
		chart: {
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#020617"],
		plotOptions: {
			bar: {
				columnWidth: "40%",
				borderRadius: 2,
			},
		},
		xaxis: {
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			labels: {
				style: {
					colors: "#616161",
					fontSize: "10px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
			categories: [
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		},
		yaxis: {
			labels: {
				style: {
					colors: "#616161",
					fontSize: "10px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
		},
		grid: {
			show: true,
			borderColor: "#dddddd",
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			padding: {
				top: 5,
				right: 20,
			},
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "light",
		},
	},
};

interface DashboardLeadAcquisitionProps {
	className?: string;
}

export function DashboardLeadAcquisition({
	className,
}: DashboardLeadAcquisitionProps) {
	const series = [
		{
			name: "Lead acquisition",
			data: [50, 40, 700, 320, 500, 350, 200, 230, 800],
		},
	];

	return (
		<Card className={cn(className)}>
			<CardHeader>
				<CardTitle>Lead Acquisition</CardTitle>
			</CardHeader>
			<CardContent>
				<Chart {...chartConfig} type="bar" height={240} series={series} />
			</CardContent>
		</Card>
	);
}
