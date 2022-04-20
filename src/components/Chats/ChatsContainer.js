import './Chats.style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions';
import { clearMessages, initMessagesForChat } from '../../store/messages/actions';
import { Chats } from './Chats';

export const ChatsContainer = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleSubmit = (newChatName) => {
        const newChat = {
            auth: newChatName,
            id: `chat-${Date.now()}`,
        };
        dispatch(addChat(newChat));
        dispatch(initMessagesForChat(newChat.id));
    };

    const handleRemoveChat = (id) => {
        dispatch(deleteChat(id));
        dispatch(clearMessages(id));
    }
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