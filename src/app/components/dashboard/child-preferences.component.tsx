import React from 'react';

const ChildPreferences: any = (props) => {
    const [child] = props.child;

    // TODO: handlers for input/submit

    return (
        <form>
            <label>
                <h4>Grade level</h4>
                <input
                    type='number'
                    pattern='[3456]'
                    title='Please enter a grade level between 3rd to 6th grade.'
                    // TODO: set value and onChange
                />
            </label>
            <button type='submit'>submit</button>
        </form>
    );
};

export { ChildPreferences };
