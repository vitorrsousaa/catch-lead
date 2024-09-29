import { GetGrowthTotalLeadsController } from "@application/modules/lead/controllers/get-growth-total-leads";
import { makeAuthenticationMiddleware } from "@factories/middlewares/authentication";
import { makeGetGrowthTotalLeadService } from "@factories/services/lead/get-growth-total-lead";

export function makeGetGrowthTotalLeadController() {
	return new GetGrowthTotalLeadsController(
		makeGetGrowthTotalLeadService(),
		makeAuthenticationMiddleware(),
	);
}
