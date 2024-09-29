import type { Prettify } from "@application/utils/types";
import type { BaseEntity } from "@core/base";
import * as z from "zod";

export const LeadSchema = z.object({
	userId: z.string().uuid(),
	name: z.string(),
	email: z.string().email(),
	source: z.string(),
	campaignId: z.string().optional(),
	campaignName: z.string().optional(),
});

export type CreateLeadSchema = z.infer<typeof LeadSchema>;

export type Lead = Prettify<CreateLeadSchema & BaseEntity>;
