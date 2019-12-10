import {HealthService, checkHealth} from "../services";
import {isInvalidHttpMethod} from "../lib/utils";
import {HttpMethod} from "../lib/http-methods";

const paths = ["health"];

const handler = function (req, context, responseCallback) {
    if (isInvalidHttpMethod(req, HttpMethod.GET, responseCallback)) return;
    checkHealth(new HealthService(), responseCallback);
};
export {paths, handler};
