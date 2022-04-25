import { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addMessageWithReply } from "../../store/messages/actions";
import { AUTHORS } from "../../utils/constants";
import { Chat } from "./Chat";
import { selectMessagesByChatId } from "../../store/messages/selectors";

export const ChatContainer = () => {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();
    const timer = useRef();
    const sendMessage = (text) => {
        dispatch(
            addMessageWithReply({
                author: AUTHORS.human,
                text,
                id: `msg-${Date.now()}`
            },
                id
            ));
    };

    if (!messages) {
        return <Navigate to="/error404" replace />
    };

    return (
            <Chat messages={messages} sendMessage={sendMessage}/>
    );
}