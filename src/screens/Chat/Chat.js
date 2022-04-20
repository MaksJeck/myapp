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

//------------------------------------------------------------------------------
// import { useEffect, useMemo, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useParams } from "react-router-dom";
// import { Form } from "../../components/Form/Form";
// import { MessageList } from "../../components/MessageList/MessageList";
// import { addMessage, addMessageWithReply } from "../../store/messages/actions";
// import { selectMessages, selectMessagesByChatId } from "../../store/messages/selectors";
// import { AUTHORS } from "../../utils/constants";

// // const initMessages = {
// //     chat1: [],
// //     chat2: [],
// //     chat3: [],
// //     chat4: [],
// // };

// export function Chat() {
//     const { id } = useParams();

//     const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
//     const messages = useSelector(getMessages);
//     const dispatch = useDispatch();
//     // const [messages, setMessages] = useState(initMessages);

//     const timer = useRef();

//     // const addMessage = (newMsg) => {
//     //     // setMessages({ ...messages, [id]: [...messages[id], newMsg] });
//     // };

//     const sendMessage = (text) => {
//         dispatch(
//             addMessageWithReply({
//                 author: AUTHORS.human,
//                 text,
//                 id: `msg-${Date.now()}`
//             },
//                 id
//             ));
//     };

//     // useEffect(() => {
//     //     const lastMessage = messages?.[messages?.length - 1];
//     //     if (lastMessage?.author === AUTHORS.human) {
//     //         timer.current = setTimeout(() => {
//     //             dispatch(
//     //                 addMessage({
//     //                     text: "Hello my friend",
//     //                     author: AUTHORS.robot,
//     //                     id: `msg-${Date.now()}`,
//     //                 },
//     //                     id
//     //                 )
//     //             );
//     //         }, 1000);
//     //     }
//     //     return () => {
//     //         clearTimeout(timer.current);
//     //     }
//     // }, [messages]);

//     if (!messages) {
//         return <Navigate to="/error404" replace />
//     }

//     return (
//         <div className="App">
//             {/* <div className='div_position'> */}
//             {/* {chat.map((chat) => <Chats key={chat.id} txt={chat.txt} auth={chat.auth} />)} */}
//             {/* <Chats /> */}
//             {/* </div> */}
//             {/* <Message author={name} text="text" /> */}
//             <div className="Pull">
//                 <MessageList messages={messages} />
//                 {/* <button onClick={addMessage}>Add msg</button> */}
//                 <Form onSubmit={sendMessage} />
//             </div>
//         </div>
//     );
// }