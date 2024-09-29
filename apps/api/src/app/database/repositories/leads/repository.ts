import type { IDatabaseClient } from "@application/database/database";
import type { TBaseEntity } from "@application/database/entities";
import type { CreateLeadSchema, Lead } from "@core/domain/lead";
import type { ILeadRepository, LeadDynamoDB } from "./types";

export class LeadRepository implements ILeadRepository {
	constructor(private readonly databaseClient: IDatabaseClient) {}
	create(data: CreateLeadSchema): Promise<Lead> {
		throw new Error("Method not implemented.");
	}

	getLeadsByUserId(userId: string): Promise<Lead[]> {
		throw new Error("Method not implemented.");
	}

	private mapToDomain(lead: LeadDynamoDB): Lead {
		return {
			createdAt: lead.created_at,
			email: lead.email,
			id: lead.id,
			name: lead.name,
			source: lead.source,
			updatedAt: lead.updated_at,
			userId: lead.user_id,
			campaignId: lead.campaign_id,
			campaignName: lead.campaign_name,
		};
	}

	private getKeys(): TBaseEntity {
		return {
			PK: "LEAD",
			SK: "LEAD",
		};
	}
	private mapToDynamoDB(lead: Lead): LeadDynamoDB {
		const { PK, SK } = this.getKeys();

		return {
			PK,
			SK,
			created_at: lead.createdAt,
			email: lead.email,
			id: lead.id,
			name: lead.name,
			source: lead.source,
			updated_at: lead.updatedAt,
			user_id: lead.userId,
			campaign_id: lead.campaignId,
			campaign_name: lead.campaignName,
		};
	}
}
