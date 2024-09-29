import { GetGrowthTotalLeadsService } from "@application/modules/lead/services/get-growth-total-leads";
import { makeLeadRepository } from "@factories/repositories/lead";

export function makeGetGrowthTotalLeadService() {
	return new GetGrowthTotalLeadsService(makeLeadRepository());
}
