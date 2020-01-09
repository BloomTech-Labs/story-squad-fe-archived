import React from 'react';

import { InputBaseComponentProps, InputLabelProps, InputProps, TextField } from '@material-ui/core';
import { fade, useTheme } from '@material-ui/core/styles';

const BaseInput: React.ElementType<InputBaseComponentProps> = ({
    'component': Component,
    inputRef,
    //Discard for stripe elements start
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribeBy,
    defaultValue,
    required,
    onAnimationStart,
    onKeyDown,
    onKeyUp,
    readOnly,
    autoComplete,
    autoFocus,
    type,
    name,
    rows,
    //Discard for stripe end
    ...other
}) => {
    const theme = useTheme();
    const [mountNode, setMountNode] = React.useState<HTMLInputElement | null>(null);

    React.useImperativeHandle(
        inputRef,
        () => ({
            focus: () => mountNode?.focus(),
        }),
        [mountNode]
    );

    return (
        <Component
            onReady={setMountNode}
            style={{
                base: {
                    'color': theme.palette.text.primary,
                    'fontSize': `${theme.typography.fontSize}px`,
                    'fontFamily': theme.typography.fontFamily,
                    '::placeholder': {
                        color: fade(theme.palette.text.primary, 0.42),
                    },
                },
                invalid: {
                    color: theme.palette.text.primary,
                },
            }}
            {...other}
        />
    );
};

interface MaterializeInputProps {
    component: React.ComponentType;
    InputLabelProps?: Partial<InputLabelProps>;
    InputProps?: Partial<InputProps>;
    fullWidth?: boolean;
    label?: string;
    labelErrorMessage?: string;
    error?: boolean;
    margin?: 'normal' | 'none' | 'dense' | undefined;
    [key: string]: any;
}

const MaterializeInput: React.FC<MaterializeInputProps> = ({
    component,
    InputLabelProps,
    InputProps,
    fullWidth = true,
    label,
    labelErrorMessage,
    error,
    margin = 'normal',
    ...other
}) => {
    return (
        <TextField
            fullWidth={fullWidth}
            margin={margin}
            label={error ? labelErrorMessage || `Invalid ${label}` : label}
            error={error}
            InputLabelProps={{
                ...InputLabelProps,
                shrink: true,
            }}
            InputProps={{
                ...InputProps,
                inputProps: {
                    component,
                },
                inputComponent: BaseInput,
            }}
            {...other}
        />
    );
};

export { BaseInput, MaterializeInput };
