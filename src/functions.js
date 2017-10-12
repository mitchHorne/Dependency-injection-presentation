import httpRequest from './http-requests';

export function getRequest() {
    return httpRequest.get();
}

export function postRequest(request = httpRequest) {
    return request.post();
}

export function putRequest() {
    return httpRequest.put();
};