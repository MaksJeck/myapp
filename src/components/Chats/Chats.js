import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import './Chats.style.css';
import { Link, Outlet } from 'react-router-dom';

const chat = [{
    auth: "Дмитрий",
    txt: "Всем привет!",
    id: "chat1"
},
{
    auth: "Елена",
    txt: "Да всем привет, как дела?",
    id: "chat2"
},
{
    auth: "Виктор",
    txt: "Всё супер!!!",
    id: "chat3"
},
{
    auth: "Анастасия",
    txt: "Чем сегодня займёмся?",
    id: "chat4"
}];

export const Chats = () => {

    return (
        <>
            <div className="div_position">
                {chat.map((chat) => (
                    <Link to={`/chat/${chat.id}`} key={chat.id}>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={chat.auth} secondary={chat.txt} />
                            </ListItem>
                        </List>
                    </Link>
                ))}
            </div>
            <Outlet />
        </>
    );
}