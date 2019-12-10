import * as routes from "./handlers/handlers";
import * as response from "./lib/http-responses";


let handlers = {};

Object.keys(routes).forEach(key => {
    let item = {};
    routes[key].paths.forEach(path => {
        handlers[path] = routes[key].handler;
    });
    return item;
});
export const echo = function (context, req) {
    const request = setRequestForLocal(context, req);
    console.log(`request: ${JSON.stringify(request)}`);

    let resourcePath = request.params.action;
    if (resourcePath in handlers) {
        handlers[resourcePath](request, context, responseCallback);
    } else {
        responseCallback(response.ERROR_404);
    }

    function responseCallback(response) {
        const responseBody = {body: JSON.stringify(response), status: response.code};
        console.log(`response: ${JSON.stringify(responseBody)}`);
        request.done(null, responseBody);
    }

    function setRequestForLocal(context, req): any {
        // request object is needed for locally run azure serverless functions
        return {
            method: req.method || context.httpMethod,
            query: req.query || context.queryStringParameters,
            params: req.params || context.pathParameters,
            done: req.done || context.done,
        };
    }
};
