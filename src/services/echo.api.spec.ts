import {EchoService, jsonifyQueryParams} from "../services";
import { throwError } from "rxjs";

class ServiceErrorStub {
    public jsonifyQueryParams() {
        return throwError(new Error("Test error"));
    }
}
describe("*********** Unit Tests for Echo API ***********", () => {
    let echoService: EchoService;
    let result: any;
    describe("jsonifyQueryParams Check", () => {
        let result;
        beforeEach((done) => {
            echoService = new EchoService();
            done();

        });
        it("should instantiate", () => {
            expect(echoService).toBeDefined();
        });
        //TODO(firat.eren) add test methods


    });
});
