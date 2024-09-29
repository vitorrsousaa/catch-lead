import type { IAudienceRepository } from "@application/database/repositories/audience";
import type { ICampaignRepository } from "@application/database/repositories/campaign";
import type { IService } from "@application/interfaces/service";
import { type Campaign, CampaignSchema } from "@core/domain/campaign";
import * as z from "zod";
import { AudienceNotFound } from "../../errors/audience-not-found";

export const CreateInputServiceSchema = CampaignSchema.extend({
	userId: z.string(),
}).omit({
	audienceName: true,
	leads: true,
});

export type TCreate = z.infer<typeof CreateInputServiceSchema>;

export type ICreateInput = TCreate;

export type ICreateOutput = Campaign;

export type ICreateService = IService<ICreateInput, ICreateOutput>;

export class CreateService implements ICreateService {
	constructor(
		private readonly campaignRepository: ICampaignRepository,
		private readonly audienceRepository: IAudienceRepository,
	) {}

	async execute(createInput: ICreateInput): Promise<ICreateOutput> {
		const audience = await this.audienceRepository.getById(
			createInput.audienceId,
		);

		if (!audience) {
			throw new AudienceNotFound();
		}

		const audienceName = audience.name;

		const DEFAULT_LEADS = 0;

		const leads = DEFAULT_LEADS;

		const campaign = await this.campaignRepository.create({
			...createInput,
			audienceName,
			leads,
		});

		return campaign;
	}
}
