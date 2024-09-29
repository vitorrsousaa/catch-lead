import { CreateController } from "@application/modules/lead/controllers/create";
import { makeAuthenticationMiddleware } from "@factories/middlewares/authentication";
import { makeCreateLeadService } from "@factories/services/lead/create";

export function makeCreateLeadController() {
	return new CreateController(
		makeAuthenticationMiddleware(),
		makeCreateLeadService(),
	);
}
