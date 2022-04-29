import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addMessageWithReply } from "../../store/messages/actions";
import { AUTHORS } from "../../utils/constants";
import { Chat } from "./Chat";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { onValue, push, set } from "firebase/database";
import { auth, getMsgsListRefById, getMsgsRefById } from "../../services/firebase";

export const ChatContainer = () => {
    const { id } = useParams();

    const [messages, setMessages] = useState([]);

    const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
    // const messages = useSelector(getMessages);
    const dispatch = useDispatch();
    const timer = useRef();
    const sendMessage = (text) => {
        push(getMsgsListRefById(id), {
            // author: AUTHORS.human,
            author: auth.currentUser.email,
            text,
            id: `msg-${Date.now()}`
        });
        // dispatch(
        //     addMessageWithReply({
        //         author: AUTHORS.human,
        //         text,
        //         id: `msg-${Date.now()}`
        //     },
        //         id
        //     ));
    };

    useEffect(() => {
        const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                console.log(val.messageList);
                setMessages(Object.values(val.messageList));
            }
        });

        return unsubscribe;
    }, [id])
    if (!messages) {
        return <Navigate to="/chat" replace />
    };

    return (
        <Chat messages={messages} sendMessage={sendMessage} />
    );
}