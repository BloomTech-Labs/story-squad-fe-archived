import React from 'react';
import { CardNumberElement } from 'react-stripe-elements';

import { MaterializeInput } from '../common/materialize-input.component';

interface StripeInputProps {
    component: React.ComponentType;
    label?: string;
    onChange?: (complete: boolean) => void;
}

const StripeInput: React.FC<StripeInputProps> = ({ component: Component, label, onChange }) => {
    const [state, setState] = React.useState({
        complete: false,
        error: '',
    });

    type handleChangeFunction = (status: { complete: boolean; error: { message: string } }) => void;
    const handleChange: handleChangeFunction = ({ complete, error }) => {
        setState({ ...state, complete, error: error?.message || '' });
        if (onChange) onChange(!error?.message && complete);
    };

    const { error } = state;
    return (
        <MaterializeInput
            label={label}
            error={!!error}
            labelErrorMessage={error}
            onChange={handleChange}
            component={Component}
        />
    );
};

export { StripeInput };
