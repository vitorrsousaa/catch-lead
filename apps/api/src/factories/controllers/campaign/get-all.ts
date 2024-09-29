import { GetAllController } from "@application/modules/campaign/controllers/get-all";
import { makeAuthenticationMiddleware } from "@factories/middlewares/authentication";
import { makeGetAllCampaigns } from "@factories/services/campaign/get-all";

export function makeGetAllCampaignController() {
	return new GetAllController(
		makeGetAllCampaigns(),
		makeAuthenticationMiddleware(),
	);
}
