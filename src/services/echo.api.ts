import { OK, ERROR } from "../lib/http-responses";

export const jsonifyQueryParams = (service, query, callback: any) => {
    service.jsonifyQueryParams(query).subscribe(json => callback(OK(json)),
        error => callback(ERROR(error)));
};
