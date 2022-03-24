// import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message';

const name = "Max";
const names = "Maxim";


function App() {
  const foo = () => {
    alert("Hello");
  };
  return (
    <div className="App">
      <Message name={name} year={50 - 17} doSmth={foo} bold={true}/>
      <Message name={names} year={50 + 50} doSmth={foo} />
    </div>
  );
}

export default App;
