import './Chats.style.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { Chats } from './Chats';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';

export const ChatsContainer = () => {
    const [chats, setChats] = useState([]);
    // const chats = useSelector(selectChats);
    // const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            auth: newChatName,
            id: `chat-${Date.now()}`,
        };
        // dispatch(addChat(newChat));
        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), {exists: true});
        // dispatch(initMessagesForChat(newChat.id));
    };

    const handleRemoveChat = (id) => {
        // dispatch(deleteChat(id));
        remove(getChatRefById(id));
        set(getMsgsRefById(id), null);
        // dispatch(clearMessages(id));
    }
    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            console.log(snapshot.val())
            setChats(Object.values(snapshot.val() || {}));
        });
        return unsubscribe;
    }, []);
    const {changeTheme} = useContext(ThemeContext);

    return (
        <Chats 
        changeTheme={changeTheme} 
        handleRemoveChat={handleRemoveChat} 
        handleSubmit={handleSubmit} 
        chats={chats} 
        />
    );
}