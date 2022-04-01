// import logo from './logo.svg';
import './App.css';
// import { Message } from './components/Message/Message';
import { useEffect, useRef, useState } from "react"
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHORS } from './utils/constants';
import { Chat } from './components/Chat/Chat';

// const human = "Max";
// const msgs = [{
//   author: name,
//   text: "text1"
// },
// {
//   author: name,
//   text: "text2"
// }];
const chat = [{
  auth: "Дмитрий",
  txt: "Всем привет!",
  id: `id-1`
   },
  {
    auth: "Елена",
    txt: "Да всем привет, как дела?",
    id: `id-2`
  },
  {
    auth: "Виктор",
    txt: "Всё супер!!!",
    id: `id-3`
     },
    {
      auth: "Анастасия",
      txt: "Чем сегодня займёмся?",
      id: `id-4`
    }];



function App() {
  const [messages, setMessages] = useState([]);

  const timer = useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`
    })
  };

  useEffect(() => {
    if(messages[messages.length - 1]?.author === AUTHORS.human) {
      timer.current = setTimeout(() => {
        addMessage({
          text: "Hello my friend", 
          author: AUTHORS.robot, 
          id: `msg-${Date.now()}`,
        });
      }, 1000);      
    }
    return () => {
      clearTimeout(timer.current);
    }
  }, [messages]);

  return (
    <div className="App">
      <div className='div_position'>
          {chat.map((chat) => <Chat key={chat.id} txt={chat.txt} auth={chat.auth} />)}
      </div>
      {/* <Message author={name} text="text" /> */}
      <div className="Pull">
      <MessageList messages={messages}/>
      {/* <button onClick={addMessage}>Add msg</button> */}
      <Form onSubmit={sendMessage} />
      </div>
    </div>
  );
}

export default App;
