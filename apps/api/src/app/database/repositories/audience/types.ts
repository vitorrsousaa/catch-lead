import type { TBaseEntity } from "@application/database/entities";
import type { Prettify } from "@application/utils/types";
import type { Audience, CreateAudienceSchema } from "@core/domain/audience";

export type AudienceDynamoDB = Prettify<
	{
		created_at: string;
		updated_at: string;
		user_id: string;
	} & TBaseEntity &
		Omit<Audience, "createdAt" | "updatedAt" | "userId">
>;

export interface IAudienceRepository {
	getAll(userId: string): Promise<Audience[]>;
	create(data: CreateAudienceSchema): Promise<Audience>;
	getById(audienceId: string): Promise<Audience>;
}
