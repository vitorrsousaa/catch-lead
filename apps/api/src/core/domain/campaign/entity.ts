import type { Prettify } from "@application/utils/types";
import type { BaseEntity } from "@core/base";
import * as z from "zod";

export const CampaignSchema = z.object({
	name: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	audienceName: z.string(),
	audienceId: z.string(),
	userId: z.string(),
	leads: z.number(),
});

export type CreateCampaignSchema = z.infer<typeof CampaignSchema>;

export type Campaign = Prettify<CreateCampaignSchema> & BaseEntity;
