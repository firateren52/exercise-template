import {EchoService, jsonifyQueryParams} from "../services";
import {isInvalidHttpMethod, isInvalidQuery} from "../lib/utils";
import {HttpMethod} from "../lib/http-methods";

const paths = ["echo"];

const handler = function (req, context, responseCallback) {
    if (isInvalidHttpMethod(req, HttpMethod.GET, responseCallback)) return;
    if (isInvalidQuery(req, ['q'], 'query parameter name should be q', responseCallback)) return;
    jsonifyQueryParams(new EchoService(), req.query, responseCallback);
};
export {paths, handler};
