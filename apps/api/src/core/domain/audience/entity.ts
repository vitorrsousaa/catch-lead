import type { Prettify } from "@application/utils/types";
import type { BaseEntity } from "@core/base";
import * as z from "zod";

export const AudienceSchema = z.object({
	name: z.string(),
	description: z.string(),
	userId: z.string(),
});

export type CreateAudienceSchema = z.infer<typeof AudienceSchema>;

export type Audience = Prettify<CreateAudienceSchema> & BaseEntity;
