import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import { Home } from './components/Homepage/Homepage';
import { Errorputh } from './components/Errors/Error404';
import { Profile } from './components/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { useState } from 'react';
import { ChatContainer } from './screens/Chat/ChatContainer';
import { ChatsContainer } from './components/Chats/ChatsContainer';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';

function App() {
  const [theme, setTheme] = useState("dark");

  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  };

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
          <Route path='/' element={<PublicRoute authed={authed} />} >
          <Route path='' element={<Home onAuth={handleLogin}/>} />
          </Route>
          

          <Route path='/profile' element={<PrivateRoute authed={authed} />} >
            <Route path='' element={<Profile onLogout={handleLogout}/>} />
            </Route>

          <Route path='/articles' element={<Articles />} />
          <Route path='/chat' element={<ChatsContainer />}>
            <Route path=':id' element={<ChatContainer />} />
          </Route>
          <Route path='*' element={<Errorputh />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App;