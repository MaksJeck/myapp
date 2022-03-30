// import logo from './logo.svg';
import './App.css';
// import { Message } from './components/Message/Message';
import { useEffect, useState } from "react"
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';

const name = "Max";
// const msgs = [{
//   author: name,
//   text: "text1"
// },
// {
//   author: name,
//   text: "text2"
// }];



function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newText) => {
    setMessages([...messages, {text: newText, author: name}]);
  };

  useEffect(() => {
    let timer;
    if(messages[messages.length - 1]?.author === name) {
      timer = setTimeout(() => {
        setMessages([...messages, {text: "Hello my friend", author: "Robot"}]);
      }, 1000);      
    }
    return () => {
      clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="App">
      {/* <Message author={name} text="text" /> */}
      <MessageList messages={messages}/>
      {/* <button onClick={addMessage}>Add msg</button> */}
      <Form onSubmit={addMessage} />
    </div>
  );
}

export default App;
