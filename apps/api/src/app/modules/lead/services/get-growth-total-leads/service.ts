import type { ILeadRepository } from "@application/database/repositories/leads";
import type { IService } from "@application/interfaces/service";
import { getDateInTheLastMonth } from "@application/utils/date";
import * as z from "zod";

export const GetGrowthTotalLeadsInputServiceSchema = z.object({
	userId: z.string().uuid(),
});

export type TGetGrowthTotalLeads = z.infer<
	typeof GetGrowthTotalLeadsInputServiceSchema
>;

export type IGetGrowthTotalLeadsInput = TGetGrowthTotalLeads;

export type IGetGrowthTotalLeadsOutput = {
	total: number;
	growth: string;
};

export type IGetGrowthTotalLeadsService = IService<
	IGetGrowthTotalLeadsInput,
	IGetGrowthTotalLeadsOutput
>;

export class GetGrowthTotalLeadsService implements IGetGrowthTotalLeadsService {
	constructor(private readonly leadRepository: ILeadRepository) {}

	async execute(
		getGrowthTotalLeadsInput: IGetGrowthTotalLeadsInput,
	): Promise<IGetGrowthTotalLeadsOutput> {
		const leads = await this.leadRepository.getLeadsByUserId(
			getGrowthTotalLeadsInput.userId,
		);

		const DEFAULT_MINOR_GROWTH = Number(0).toFixed(2);
		const DEFAULT_MAJOR_GROWTH = Number(100).toFixed(2);

		if (leads.length === 0) {
			return {
				total: 0,
				growth: DEFAULT_MINOR_GROWTH,
			};
		}

		const dateEndOfLastMonth = getDateInTheLastMonth();

		const leadsCreatedUpToTheLastMonth = [];
		const leadsCreatedAfterTheLastMonth = [];

		for (const lead of leads) {
			const createdAt = new Date(lead.createdAt);

			if (createdAt.getTime() <= dateEndOfLastMonth.getTime()) {
				leadsCreatedUpToTheLastMonth.push(lead);
			} else {
				leadsCreatedAfterTheLastMonth.push(lead);
			}
		}

		const previousMonthCount = leadsCreatedUpToTheLastMonth.length;
		const currentMonthCount = leadsCreatedAfterTheLastMonth.length;

		if (previousMonthCount === 0 && currentMonthCount === 0) {
			return {
				total: leads.length,
				growth: DEFAULT_MINOR_GROWTH,
			};
		}

		if (previousMonthCount === 0) {
			return {
				total: leads.length,
				growth: DEFAULT_MAJOR_GROWTH,
			};
		}

		const growth =
			((currentMonthCount - previousMonthCount) / previousMonthCount) * 100;

		return {
			total: leads.length,
			growth: growth.toFixed(2),
		};
	}
}
