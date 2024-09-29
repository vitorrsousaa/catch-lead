import type { IDatabaseClient } from "@application/database/database";
import type { TBaseEntity } from "@application/database/entities";
import type { Campaign, CreateCampaignSchema } from "@core/domain/campaign";
import type { CampaignDynamoDB, ICampaignRepository } from "./types";

export class CampaignRepository implements ICampaignRepository {
	constructor(private readonly databaseClient: IDatabaseClient) {}
	getById(id: string): Promise<Campaign | null> {
		throw new Error("Method not implemented.");
	}
	create(data: CreateCampaignSchema): Promise<Campaign> {
		throw new Error("Method not implemented.");
	}

	getAll(userId: string): Promise<Campaign[]> {
		throw new Error("Method not implemented.");
	}

	private maptoDomain(data: CampaignDynamoDB): Campaign {
		return {
			createdAt: data.created_at,
			updatedAt: data.updated_at,
			id: data.id,
			audienceId: data.audience_id,
			audienceName: data.audience_name,
			endDate: data.end_date,
			name: data.name,
			startDate: data.start_date,
			userId: data.user_id,
			leads: data.leads,
		};
	}

	private getKeys(id: string): TBaseEntity {
		return {
			PK: "ENTITY",
			SK: "ENTITY",
		};
	}

	private mapToDynamoDB(data: Campaign): CampaignDynamoDB {
		const { PK, SK } = this.getKeys(data.id);

		return {
			PK,
			SK,
			created_at: data.createdAt,
			updated_at: data.updatedAt,
			id: data.id,
			audience_id: data.audienceId,
			audience_name: data.audienceName,
			end_date: data.endDate,
			name: data.name,
			start_date: data.startDate,
			user_id: data.userId,
			leads: data.leads,
		};
	}
}
