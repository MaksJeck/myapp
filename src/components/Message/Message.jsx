import './Message.style.css';

export const Message = ({ author, text }) => {
    return (
        // <h3 onClick={doSmth}>I am a message: {name}, {year}</h3>
        <div className="message flexis">
            <span className="">{author}: </span>
            <span className="">{text}</span>
        </div>
    );
}