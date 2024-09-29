import { vi } from "vitest";
import type { IGetGrowthTotalLeadsService } from "./service";

describe("Service:GetGrowthTotalLeads", () => {
	let service: IGetGrowthTotalLeadsService;
	// const inputData: IGetGrowthTotalLeadsInput = {
	// 	name: 'John Doe'
	// }

	beforeEach(() => {
		// service = new GetGrowthTotalLeadsService();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("Should correct", async () => {
		// Arrange

		// Act
		// await service.execute(inputData);

		// Assert
		expect(true).toBe(true);
	});
});
