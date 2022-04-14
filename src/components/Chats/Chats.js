import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import './Chats.style.css';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { Form } from '../Form/Form';

// const chat = [{
//     auth: "Дмитрий",
//     txt: "Всем привет!",
//     id: "chat1"
// },
// {
//     auth: "Елена",
//     txt: "Да всем привет, как дела?",
//     id: "chat2"
// },
// {
//     auth: "Виктор",
//     txt: "Всё супер!!!",
//     id: "chat3"
// },
// {
//     auth: "Анастасия",
//     txt: "Чем сегодня займёмся?",
//     id: "chat4"
// }];

export const Chats = ({ chats, addChat, deleteChat }) => {

    const handleSubmit = (newChatName) => {
        const newChat = {
            auth: newChatName,
            id: `chat-${Date.now()}`,
        };
        addChat(newChat);
    };
    const {changeTheme} = useContext(ThemeContext);

    return (
        <>

        <Button onClick={changeTheme}>Theme</Button>
            <div className="div_position" >
                {chats.map((chats) => (
                    <div key={chats.id}>
                    <Link to={`/chat/${chats.id}`} >
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={chats.auth} secondary={chats.txt} />
                            </ListItem>
                        </List>
                    </Link>
                    <span onClick={() => deleteChat(chats.id)}>delete</span>
                    </div>
                ))}
            </div>
            <Form onSubmit={handleSubmit}/>
            <Outlet />
        </>
    );
}