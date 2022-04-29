import { addChat, ADD_CHAT } from "../actions";

describe('addChat', () => {
    it('returns object with predefind type', () => {
        const expected = {
            type: ADD_CHAT,
        };
        const received = addChat();
        expect(received).toEqual(expected);
    });
});