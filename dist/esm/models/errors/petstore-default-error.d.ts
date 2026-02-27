import { PetstoreError } from "./petstore-error.js";
/** The fallback error class if no more specific error class is matched */
export declare class PetstoreDefaultError extends PetstoreError {
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
//# sourceMappingURL=petstore-default-error.d.ts.map