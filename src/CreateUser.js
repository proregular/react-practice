import React, { useRef, useCallback } from "react";
import useInputs from './hooks/useInputs';
import { UserNextId } from "./App";

function CreateUser() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    });

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
            id: nextId.current,
            username,
            email
            }
        });
        onReset();
        nextId.current += 1;
    }, [username, email, onReset]);

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username} 
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);