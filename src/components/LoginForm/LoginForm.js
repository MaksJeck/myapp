import { useState } from "react"

export const LoginForm = ({ onSubmit }) => {
    const [login, setlogin] = useState("");
    const [pass, setPass] = useState("");
    const handleChangeLogin = (e) => {
        setlogin(e.target.value);
    };
    const handleChangePass = (e) => {
        setPass(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({login, pass});
        setlogin('');
        setPass('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={login} onChange={handleChangeLogin} />
            <input type="password" value={pass} onChange={handleChangePass} />
            <input type="submit" />
        </form>
    )
}