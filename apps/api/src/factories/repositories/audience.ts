import { AudienceRepository } from "@application/database/repositories/audience";
import { makeDatabaseClient } from "./db";

export function makeAudienceRepository() {
	return new AudienceRepository(makeDatabaseClient());
}
