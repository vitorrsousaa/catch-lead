export interface Lead {
	id: string;
	name: string;
	email: string;
	source: string;
	campaignId?: string;
	campaignName?: string;
}
