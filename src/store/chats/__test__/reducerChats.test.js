import { addChat } from "../actions";
import { chatsReducer } from "../reducer";

describe('chats reducer', () => {
    it('sets error to null if called with request action', () => {
        const result = chatsReducer([], 
        addChat()
    );
    expect(result.addChat);    
    });
});