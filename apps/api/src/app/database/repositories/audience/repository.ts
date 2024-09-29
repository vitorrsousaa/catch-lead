import type { IDatabaseClient } from "@application/database/database";
import type { TBaseEntity } from "@application/database/entities";
import type { Audience, CreateAudienceSchema } from "@core/domain/audience";
import type { AudienceDynamoDB, IAudienceRepository } from "./types";

export class AudienceRepository implements IAudienceRepository {
	constructor(private readonly databaseClient: IDatabaseClient) {}
	getAll(userId: string): Promise<Audience[]> {
		throw new Error("Method not implemented.");
	}
	getById(audienceId: string): Promise<Audience> {
		throw new Error("Method not implemented.");
	}
	create(data: CreateAudienceSchema): Promise<Audience> {
		throw new Error("Method not implemented.");
	}

	private maptoDomain(data: AudienceDynamoDB): Audience {
		return {
			createdAt: data.created_at,
			updatedAt: data.updated_at,
			id: data.id,
			description: data.description,
			name: data.name,
			userId: data.user_id,
		};
	}

	private getKeys(id: string): TBaseEntity {
		return {
			PK: "ENTITY",
			SK: "ENTITY",
		};
	}

	private mapToDynamoDB(data: Audience): AudienceDynamoDB {
		const { PK, SK } = this.getKeys(data.id);

		return {
			PK,
			SK,
			created_at: data.createdAt,
			updated_at: data.updatedAt,
			id: data.id,
			description: data.description,
			name: data.name,
			user_id: data.userId,
		};
	}
}
