import { LeadRepository } from "@application/database/repositories/leads/repository";
import { makeDatabaseClient } from "./db";

export function makeLeadRepository() {
	return new LeadRepository(makeDatabaseClient());
}
