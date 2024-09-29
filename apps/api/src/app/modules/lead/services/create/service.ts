import type { ICampaignRepository } from "@application/database/repositories/campaign";
import type { ILeadRepository } from "@application/database/repositories/leads";
import type { IService } from "@application/interfaces/service";
import { type Lead, LeadSchema } from "@core/domain/lead";
import type * as z from "zod";

export const CreateInputServiceSchema = LeadSchema;

export type TCreate = z.infer<typeof CreateInputServiceSchema>;

export type ICreateInput = TCreate;

export type ICreateOutput = Lead;

export type ICreateService = IService<ICreateInput, ICreateOutput>;

export class CreateService implements ICreateService {
	constructor(
		private readonly campaignRepository: ICampaignRepository,
		private readonly leadRepository: ILeadRepository,
	) {}

	async execute(createInput: ICreateInput): Promise<ICreateOutput> {
		const { campaignId } = createInput;

		if (campaignId) {
			const campaign = await this.campaignRepository.getById(campaignId);

			if (!campaign) {
				throw new Error("Campaign not found");
			}

			const lead = await this.leadRepository.create({
				...createInput,
				campaignName: campaign.name,
			});

			return lead;
		}

		const lead = await this.leadRepository.create(createInput);

		return lead;
	}
}
