import './App.css';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { Chats } from './components/Chats/Chats';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import { Chat } from './screens/Chat/Chat';
import { Button, ButtonGroup } from '@mui/material';
import { Home } from './components/Homepage/Homepage';
import { Errorputh } from './components/Errors/Error404';
import { Profile } from './components/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { useState } from 'react';
import { ChatContainer } from './screens/Chat/ChatContainer';
import { ChatsContainer } from './components/Chats/ChatsContainer';
import { Articles } from './screens/Articles/Articles';
// import { addChat, deleteChat } from './store/chats/actions';
// import { selectChats } from './store/chats/selectors';
// import { selectMessages } from './store/messages/selectors';
// import { addMessage, clearMessages, initMessagesForChat } from './store/messages/actions';

// const initialChats = [{
//   auth: "Дмитрий",
//   txt: "Всем привет!",
//   id: "chat1"
// },
// {
//   auth: "Елена",
//   txt: "Да всем привет, как дела?",
//   id: "chat2"
// },
// {
//   auth: "Виктор",
//   txt: "Всё супер!!!",
//   id: "chat3"
// },
// {
//   auth: "Анастасия",
//   txt: "Чем сегодня займёмся?",
//   id: "chat4"
// }];

// const initialMessages = initialChats.reduce((acc, chat) => {
//   acc[chat.id] = [];
//   return acc;
// }, {});


function App() {
  const [theme, setTheme] = useState("dark");

      // const [chat, setChats] = useState(initialChats);
  // const chats = useSelector(selectChats, shallowEqual);
  // const messages = useSelector(selectMessages);
  // const dispatch = useDispatch();
      // const [messages, setMessages] = useState(initialMessages);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  };

  // const addNewMessage = (newMsg, id) => {
  //       // setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  //   dispatch(addMessage(newMsg, id));
  // };

  // const addNewChat = (newChat) => {
  //       // setChats((prevChats) => [...prevChats, newChat]);
  //   dispatch(addChat(newChat));
  //   dispatch(initMessagesForChat(newChat.id));
  //       // setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  // }

  // const removeChat = (id) => {
  //       // setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
  //   dispatch(deleteChat(id));
  //   dispatch(clearMessages(id));
  //       // setMessages((prevMessages) => {
  //       //   const newMessages = { ...prevMessages };
  //       //   delete newMessages[id];

  //       //   return newMessages;
  //       // });
  // };


  return (

    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              Home
            </NavLink>
          </Button>

          <Button>
            <NavLink
              to="/profile"
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              Profile
            </NavLink>
          </Button>

          <Button>
            <NavLink
              to="/chat"
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              Chat
            </NavLink>
          </Button>

          <Button>
            <NavLink
              to="/articles"
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              Articles
            </NavLink>
          </Button>
        </ButtonGroup>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/articles' element={<Articles />} />
          {/* <Route path='/chat' element={<Chats />}> */}
          <Route path='/chat' element={<ChatsContainer />}>
            {/* <Route path=':id' element={<Chat />} /> */}
            <Route path=':id' element={<ChatContainer />} />
          </Route>
          <Route path='*' element={<Errorputh />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;