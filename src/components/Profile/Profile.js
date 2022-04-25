import { Button } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form/Form";


export const Profile = ({ onLogout }) => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    // console.log(state);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

    return (
        <>
            <h4>Profile page</h4>
            <Button onClick={onLogout}>LOGOUT</Button>
            {/* <input onClick={handleClick} checked={state.showName} type="checkbox"/>    */}
            <button onClick={handleClick}>change show name</button>
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
};