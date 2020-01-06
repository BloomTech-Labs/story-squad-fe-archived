import React from 'react';
import axios from 'axios';

const ChildCreation: any = () => {
    const [input, setInput] = React.useState({ username: '', grade: '3' });

    function inputHandler(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();

        // may need to move to parent/children
        axios
            .post('localhost:4000/children', { ...input, grade: Number(input.grade) })
            .then((res) => {
                //go back to dashboard
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <h4>Username</h4>
                <input
                    type='text'
                    name='username'
                    required
                    value={input.username}
                    onChange={inputHandler}
                />
            </label>
            <label>
                <h4>Grade level</h4>
                <input
                    type='number'
                    name='grade'
                    pattern='[3456]'
                    title='Please enter a grade level between 3rd to 6th grade.'
                    required
                    value={input.grade}
                    onChange={inputHandler}
                />
            </label>
            {/* Add TOS and Privacy Policy checkbox ? */}
            <button type='submit'>submit</button>
        </form>
    );
};

export { ChildCreation };
