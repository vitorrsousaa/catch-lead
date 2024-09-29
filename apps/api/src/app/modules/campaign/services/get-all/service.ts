import type { ICampaignRepository } from "@application/database/repositories/campaign";
import type { IService } from "@application/interfaces/service";
import type { Campaign } from "@core/domain/campaign";
import * as z from "zod";

export const GetAllInputServiceSchema = z.object({
	userId: z.string().uuid(),
});

export type TGetAll = z.infer<typeof GetAllInputServiceSchema>;

export type IGetAllInput = TGetAll;

export type IGetAllOutput = Campaign[];

export type IGetAllService = IService<IGetAllInput, IGetAllOutput>;

export class GetAllService implements IGetAllService {
	constructor(private readonly campaignRepository: ICampaignRepository) {}

	async execute(getAllInput: IGetAllInput): Promise<IGetAllOutput> {
		const campaigns = await this.campaignRepository.getAll(getAllInput.userId);

		return campaigns;
	}
}
