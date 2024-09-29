import { GetAllService } from "@application/modules/campaign/services/get-all";
import { makeCampaignRepository } from "@factories/repositories/campaign";

export function makeGetAllCampaigns() {
	return new GetAllService(makeCampaignRepository());
}
