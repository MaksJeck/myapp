import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";

import './Form.style.css';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log('did mount', inputRef);
        inputRef.current?.focus();
        return () => {
            console.log('will unmount');
        };
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            {/* <input value={value} onChange={handleChange} type="text" required/> */}
            {/* <input type="submit"/> */}
            <TextField value={value} onChange={handleChange} inputRef={inputRef} required/>
            <Button className="btn" type="submit" variant="contained" endIcon={<SendIcon />}>Отправить</Button>
        </form>
    );
}