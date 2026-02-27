import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
export declare class SDK extends ClientSDK {
    /**
     * List all pets
     */
    listPets(options?: RequestOptions): Promise<Array<models.Pet>>;
}
//# sourceMappingURL=sdk.d.ts.map