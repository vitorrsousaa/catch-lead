import { CreateController } from "@application/modules/campaign/controllers/create";
import { makeAuthenticationMiddleware } from "@factories/middlewares/authentication";
import { makeCreateCampaignService } from "@factories/services/campaign/create";

export function makeCreateCampaignController() {
	return new CreateController(
		makeAuthenticationMiddleware(),
		makeCreateCampaignService(),
	);
}
