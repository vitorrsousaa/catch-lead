import { CreateService } from "@application/modules/campaign/services/create";
import { makeAudienceRepository } from "@factories/repositories/audience";
import { makeCampaignRepository } from "@factories/repositories/campaign";

export function makeCreateCampaignService() {
	return new CreateService(makeCampaignRepository(), makeAudienceRepository());
}
