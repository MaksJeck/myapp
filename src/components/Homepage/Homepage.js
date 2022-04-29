import { useState } from "react";
import { Link } from "react-router-dom";
import { logIn, signUp } from "../../services/firebase";
import { LoginForm } from "../LoginForm/LoginForm";

export const Home = ({ onAuth, isSignUp }) => {
    const [error, setError] = useState('');
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }
    };
    return (
        <><h4>Home page</h4>
            {/* <button onClick={onAuth}>Auth</button> */}
            <LoginForm onSubmit={handleSubmit} />
            {error && <h5>{error}</h5>}
            <Link to={isSignUp ? "/" : "/signup"} >
                {isSignUp ? "to login" : "to signup"}
            </Link>
        </>
    );
};