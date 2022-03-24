import './Message.style.css';

export const Message = ({ name, year, bold }) => {
    return (
    // <h3 onClick={doSmth}>I am a message: {name}, {year}</h3>
    <h3 className={"message" + (!bold ? " header" : "")}>
        I am a message: {name}, {year}
    </h3>
    );
}