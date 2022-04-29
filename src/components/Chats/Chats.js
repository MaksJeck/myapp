import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import './Chats.style.css';
import { Link, Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';

export const Chats = ({changeTheme, handleRemoveChat, handleSubmit, chats}) => (
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
                                {/* <ListItemText primary={chats.auth} secondary={chats.txt} /> */}
                                <ListItemText primary={chats.auth}/>
                            </ListItem>
                        </List>
                    </Link>
                    <span onClick={() => handleRemoveChat(chats.id)}>delete</span>
                </div>
            ))}
        </div>
        <Form onSubmit={handleSubmit} />
        <Outlet />
    </>
);