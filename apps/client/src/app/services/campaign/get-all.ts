import type { Campaign } from "@/entities/campaign";
import { httpClient } from "../httpClient";

export async function getAll() {
	const { data } = await httpClient.get<Campaign[]>("/campaign/all");
	return data;
}
