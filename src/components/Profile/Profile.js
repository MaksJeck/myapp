import { connect, useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form/Form";


export const Profile = () => {
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
            {/* <input onClick={handleClick} checked={state.showName} type="checkbox"/>    */}
            <button onClick={handleClick}>change show name</button>
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
}

// export const ProfileToConnect = ({name, showName, changeName, changeCheckbox}) => {
//     console.log(name, showName);
//     const handleClick = () => {
//         changeCheckbox();
//     };
//     const handleSubmit = (text) => {
//         changeName(text);
//     };
//     return (
//         <>
//             <h4>Profile page</h4>
//             <button onClick={handleClick}>change show name</button>
//             {showName && <span>{name}</span>}
//             <Form onSubmit={handleSubmit} />
//         </>
//     );
// }

// const mapStateToProps = (state) => ({
//     name: state.profile.name,
//     showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//     changeName: setName,
//     changeCheckbox: () => toggleCheckbox,
// };

// export const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect);