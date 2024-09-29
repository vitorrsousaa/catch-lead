import type { ILeadRepository } from "@application/database/repositories/leads";
import type { IService } from "@application/interfaces/service";
import type { Lead } from "@core/domain/lead";
import * as z from "zod";

export const GetAllInputServiceSchema = z.object({
	userId: z.string().uuid(),
});

export type TGetAll = z.infer<typeof GetAllInputServiceSchema>;

export type IGetAllInput = TGetAll;

export type IGetAllOutput = Lead[];

export type IGetAllService = IService<IGetAllInput, IGetAllOutput>;

export class GetAllService implements IGetAllService {
	constructor(private readonly leadRepository: ILeadRepository) {}

	async execute(getAllInput: IGetAllInput): Promise<IGetAllOutput> {
		const leads = await this.leadRepository.getLeadsByUserId(
			getAllInput.userId,
		);

		return leads;
	}
}
