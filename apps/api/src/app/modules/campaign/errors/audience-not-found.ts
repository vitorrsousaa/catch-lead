import { AppError } from "@application/errors/app-error";

export class AudienceNotFound extends AppError {
	constructor() {
		super("Audience not found", 404);
	}
}
