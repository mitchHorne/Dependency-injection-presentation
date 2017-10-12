import React from "react";
import { postRequest } from '../functions';

describe('postRequest', () => {
    test('should call request.post', () => {
        const mockedRequest = {
          post: jest.fn(() => 200),
        };

        const response = postRequest(mockedRequest);
        expect(response).toBe(200);
        expect(mockedRequest.post).toHaveBeenCalled();
    })
})