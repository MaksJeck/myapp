import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";


export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);

    const handleClick = () => {
        dispatch(toggleCheckbox);
    };

    return (
        <>
            <h4>Profile page</h4>
            {/* <input onClick={handleClick} type="checkbox"/>    */}
            <button onClick={handleClick}>change show name</button>
            {state.showName && <span>{state.name}</span>}
        </>
    );
}