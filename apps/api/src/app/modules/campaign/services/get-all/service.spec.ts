import { vi } from "vitest";
import type { IGetAllService } from "./service";

describe("Service:GetAll", () => {
	let service: IGetAllService;
	// const inputData: IGetAllInput = {
	// 	name: "John Doe",
	// };

	beforeEach(() => {
		// service = new GetAllService();
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
