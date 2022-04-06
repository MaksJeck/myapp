import './App.css';
import { Provider } from 'react-redux';
// import { useEffect, useRef, useState } from "react"
// import { Form } from './components/Form/Form';
// import { MessageList } from './components/MessageList/MessageList';
// import { AUTHORS } from './utils/constants';
import { Chats } from './components/Chats/Chats';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { Button, ButtonGroup } from '@mui/material';
import { Home } from './components/Homepage/Homepage';
import { Errorputh } from './components/Errors/Error404';
import { Profile } from './components/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { useState } from 'react';
import { store } from './store';


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  };


  return (
    <Provider store={store}>
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
        </ButtonGroup>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chats />}>
            <Route path=':id' element={<Chat />} />
          </Route>
          <Route path='*' element={<Errorputh />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>
  )
}

export default App;
