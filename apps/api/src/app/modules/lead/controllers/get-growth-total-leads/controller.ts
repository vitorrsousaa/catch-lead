import type { IController } from "@application/interfaces/controller";
import type { IRequest, IResponse } from "@application/interfaces/http";
import type { IAuthenticationMiddleware } from "@application/shared/middlewares/authentication";
import { errorHandler } from "@application/utils/error-handler";
import { missingFields } from "@application/utils/missing-fields";
import {
	GetGrowthTotalLeadsInputServiceSchema,
	type IGetGrowthTotalLeadsService,
} from "../../services/get-growth-total-leads";

export class GetGrowthTotalLeadsController implements IController {
	constructor(
		private readonly service: IGetGrowthTotalLeadsService,
		private readonly authMiddleware: IAuthenticationMiddleware,
	) {}
	async handle(request: IRequest): Promise<IResponse> {
		try {
			const { userId } = await this.authMiddleware.handle(request);

			const [status, parsedBody] = missingFields(
				GetGrowthTotalLeadsInputServiceSchema,
				{ userId },
			);

			if (!status) return parsedBody;

			const service = await this.service.execute(parsedBody);

			return {
				statusCode: 200,
				body: service,
			};
		} catch (error) {
			return errorHandler(error);
		}
	}
}
