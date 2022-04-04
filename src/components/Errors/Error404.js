import { Link } from "react-router-dom";

export const Errorputh = () => {
    return (
        <div>
            <h1>Неверный путь</h1>
            <Link to='/'><h2>Вернуться на домашнюю страницу</h2></Link>
        </div>
    );
}