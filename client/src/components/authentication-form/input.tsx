import { Input, InputProps, TextField, TextFieldProps, styled } from "@mui/material";
import React, { ForwardedRef, forwardRef } from "react";

const StyledInput = styled(TextField)({
    color: 'white',
    '& .MuiInput-root:after': {
        border: '1px solid white'
    },
    '& .MuiInput-root:before': {
        borderBottom: '1px solid white'
    },
    '& .MuiInput-root:hover': {
        borderBottom: '1px solid white'
    },
    '& .MuiInput-root:hover:not(.Mui-disabled):not(.Mui-error):before': {
        borderBottom: 'none',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'white'
    },
    '& .MuiInputLabel-root': {
        color: 'white'
    }
});

type AuthenticationInputProps = TextFieldProps;

const AuthenticationInput = forwardRef(({ ...rest }: AuthenticationInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <StyledInput  {...rest} inputRef={ref} variant="standard" required />
    );
})

export default AuthenticationInput;
