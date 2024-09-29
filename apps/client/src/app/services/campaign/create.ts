import type { Campaign } from "@/entities/campaign";
import { httpClient } from "../httpClient";

export interface CreateCampaignParams {
	name: string;
	startDate: string;
	endDate: string;
	audienceName: string;
	audienceId: string;
}

export async function create(params: CreateCampaignParams) {
	const { data } = await httpClient.post<Campaign>("/campaign/all", params);
	return data;
}
