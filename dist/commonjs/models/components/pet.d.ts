import * as z from "zod/v4-mini";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
export type Pet = {
    id: number;
    name: string;
};
/** @internal */
export declare const Pet$inboundSchema: z.ZodMiniType<Pet, unknown>;
export declare function petFromJSON(jsonString: string): SafeParseResult<Pet, SDKValidationError>;
//# sourceMappingURL=pet.d.ts.map