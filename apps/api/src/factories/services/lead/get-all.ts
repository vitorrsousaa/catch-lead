import { GetAllService } from "@application/modules/lead/services/get-all";
import { makeLeadRepository } from "@factories/repositories/lead";

export function makeGetAllLeads() {
	return new GetAllService(makeLeadRepository());
}
