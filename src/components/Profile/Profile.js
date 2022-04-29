import { Button } from "@mui/material";
import { onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase";
import { initProfileTrack, setName, setNameFB, setShowName, stopProfileTrack, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form/Form";


export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();
    // const [name, setName] = useState("");
    // const [showName, setShowName] = useState(false);
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    // console.log(state);

    const handleClick = () => {
        dispatch(setShowName(!showName));
        // dispatch(toggleCheckbox);
        // set(userShowNameRef, !showName);
    };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
        // set(userNameRef, text);
    };

    useEffect(() => {
        dispatch(initProfileTrack());
        return () => {
            dispatch(stopProfileTrack());
        };
    }, [])

    return (
        <>
            <h4>Profile page</h4>
            <Button onClick={logOut}>LOGOUT</Button>
            {/* <input onClick={handleClick} checked={state.showName} type="checkbox"/>    */}
            <button onClick={handleClick}>change show name</button>
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
};