export function getRequest() {
  return httpRequest.get();
}

export function postRequest(request = httpRequest) {
  return request.post();
}