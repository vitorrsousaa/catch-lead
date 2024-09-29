import type { Lead } from "@/entities/lead";
import { httpClient } from "../httpClient";

export async function getAll() {
	const { data } = await httpClient.get<Lead[]>("/lead/all");
	return data;
}
