import { CreateService } from "@application/modules/lead/services/create";
import { makeCampaignRepository } from "@factories/repositories/campaign";
import { makeLeadRepository } from "@factories/repositories/lead";

export function makeCreateLeadService() {
	return new CreateService(makeCampaignRepository(), makeLeadRepository());
}
