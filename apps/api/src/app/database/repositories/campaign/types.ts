import type { TBaseEntity } from "@application/database/entities";
import type { Prettify } from "@application/utils/types";
import type { Campaign, CreateCampaignSchema } from "@core/domain/campaign";

export type CampaignDynamoDB = Prettify<
	{
		created_at: string;
		updated_at: string;
		audience_id: string;
		audience_name: string;
		end_date: string;
		start_date: string;
		user_id: string;
	} & TBaseEntity &
		Omit<
			Campaign,
			| "createdAt"
			| "updatedAt"
			| "audienceId"
			| "audienceName"
			| "endDate"
			| "startDate"
			| "userId"
		>
>;

export interface ICampaignRepository {
	getAll(userId: string): Promise<Campaign[]>;
	create(data: CreateCampaignSchema): Promise<Campaign>;
	getById(id: string): Promise<Campaign | null>;
}
