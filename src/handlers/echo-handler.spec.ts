import {
    handler
} from "./echo-handler";
import * as services from "../services";
import {jsonifyQueryParams} from "../services";


describe("Echo Handler", () => {
    describe("when handler is called", () => {
        it("should invoke jsonifyQueryParams", () => {
            spyOn(services, "jsonifyQueryParams").and.callFake(function(undefined) {});
            const req = JSON.parse(`{"method":"get","body":null,{"q": "lorem ipsum"},"params":{"action":"echo"}}`);
            handler(req, null, undefined);
            expect(services.jsonifyQueryParams).toHaveBeenCalled();
        });

        it("should return error if there is no query params", () => {
            const req = JSON.parse(`{"method":"put","body":null,"params":{"action":"echo"}}`);
            handler(req, null, function(resp) {
                expect(resp.code).toBe("403");
            });
        });

        it("should return error if invalid method", () => {
            const req = JSON.parse(`{"method":"put","body":null,{"q": "lorem ipsum"},"params":{"action":"echo"}}`);
            handler(req, null, function(resp) {
                expect(resp.code).toBe("405");
            });
        });

    });
});


