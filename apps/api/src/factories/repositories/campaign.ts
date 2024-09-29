import { CampaignRepository } from "@application/database/repositories/campaign";
import { makeDatabaseClient } from "./db";

export function makeCampaignRepository() {
	return new CampaignRepository(makeDatabaseClient());
}
