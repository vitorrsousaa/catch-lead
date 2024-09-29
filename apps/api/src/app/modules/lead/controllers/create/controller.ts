import type { IController } from "@application/interfaces/controller";
import type { IRequest, IResponse } from "@application/interfaces/http";
import type { IAuthenticationMiddleware } from "@application/shared/middlewares/authentication";
import { errorHandler } from "@application/utils/error-handler";
import { missingFields } from "@application/utils/missing-fields";
import {
	CreateInputServiceSchema,
	type ICreateService,
} from "../../services/create";

export class CreateController implements IController {
	constructor(
		private readonly authenticationMiddleware: IAuthenticationMiddleware,
		private readonly service: ICreateService,
	) {}
	async handle(request: IRequest): Promise<IResponse> {
		try {
			const { userId } = await this.authenticationMiddleware.handle(request);
			const [status, parsedBody] = missingFields(CreateInputServiceSchema, {
				...request.body,
				userId,
			});

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
