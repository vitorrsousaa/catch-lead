import type { Lead } from "@/entities/lead";
import { httpClient } from "../httpClient";

export interface CreateLeadParams {
	name: string;
	email: string;
	source: string;
	campaignId?: string;
	campaignName?: string;
}

export async function create(params: CreateLeadParams) {
	const { data } = await httpClient.post<Lead>("/lead/create", params);
	return data;
}
