import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";

export const Chat = ({ messages, sendMessage}) => (
    <div className="App">
        <div className="Pull">
            <MessageList messages={messages} />
            <Form onSubmit={sendMessage} />
        </div>
    </div>
);