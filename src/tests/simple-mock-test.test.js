import simple from 'simple-mock';
import { getRequest } from '../functions';
import httpRequest from '../http-requests';

describe('simple mock test' , () => {
    describe('getRequest', () => {
        test('should call request.get', () => {
            const mock = simple.mock(httpRequest, 'get', () => 200);
            
            const response = getRequest();
            expect(response).toBe(200);
            expect(mock.called).toBeDefined();
        })
    })
})