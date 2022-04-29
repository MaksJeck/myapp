import './Message.style.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';

export const Message = ({ author, text, theme }) => {

    console.log(theme);
    return (
        // <h3 onClick={doSmth}>I am a message: {name}, {year}</h3>
        <div className="message flexis">
            <span style={{ color: theme === "dark" ? "red" : "blue" }}>
                {author}:
            </span>
            <span>{text}</span>
        </div>
    );
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string,
}

const withBlueColor = (Component) => (props) => {
    const { theme } = useContext(ThemeContext);
    return <Component {...props} theme={theme} />
};
export const MessageWithBlueColor = withBlueColor(Message);