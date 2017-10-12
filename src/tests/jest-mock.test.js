jest.mock('../http-requests.js')
import { putRequest } from '../functions';
import httpRequest from '../http-requests';

describe('Jest module mocking', () => {
  describe('putRequest', () => {
    test('it should call request.put', () => {
      httpRequest.put.mockImplementation(() => 200)

      const  response = putRequest();
      expect(response).toBe(200)
      expect(httpRequest.put).toHaveBeenCalled();
    })
  })
})