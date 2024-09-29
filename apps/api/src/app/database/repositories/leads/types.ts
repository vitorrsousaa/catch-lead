import type { TBaseEntity } from "@application/database/entities";
import type { Prettify } from "@application/utils/types";
import type { CreateLeadSchema, Lead } from "@core/domain/lead";

export type LeadDynamoDB = Prettify<
	{
		user_id: string;
		created_at: string;
		updated_at: string;
		campaign_id: Lead["campaignId"];
		campaign_name: Lead["campaignName"];
	} & TBaseEntity &
		Omit<
			Lead,
			"createdAt" | "updatedAt" | "userId" | "campaignId" | "campaignName"
		>
>;

export interface ILeadRepository {
	getLeadsByUserId(userId: string): Promise<Lead[]>;
	create(data: CreateLeadSchema): Promise<Lead>;
}
