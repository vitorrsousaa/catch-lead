import { GetAllController } from "@application/modules/lead/controllers/get-all";
import { makeAuthenticationMiddleware } from "@factories/middlewares/authentication";
import { makeGetAllLeads } from "@factories/services/lead/get-all";

export function makeGetAllLeadsController() {
	return new GetAllController(
		makeAuthenticationMiddleware(),
		makeGetAllLeads(),
	);
}
