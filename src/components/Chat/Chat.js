import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import './Chat.style.css';


// import { List, ListItem } from "@mui/material";

export const Chat = ({ auth, txt }) => {
    return (
        <div className="">            
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={auth} secondary={txt} />
            </ListItem>
            </List>
        </div>
    );
}