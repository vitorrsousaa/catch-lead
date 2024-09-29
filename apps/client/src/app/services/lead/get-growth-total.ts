import { httpClient } from "../httpClient";

export interface GrowthTotalOutput {
	total: number;
	growth: string;
}

export async function getGrowthTotal() {
	const { data } =
		await httpClient.get<GrowthTotalOutput>("/lead/growth-total");

	return data;
}
