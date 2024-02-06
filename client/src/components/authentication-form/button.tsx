import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)({
    color: 'white',
    fontWeight: 'bold'
})

type AuthenticationFormButtonProps = {
    children: React.ReactNode
} & ButtonProps

function AuthenticationFormButton({ children, ...rest }: AuthenticationFormButtonProps) {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default AuthenticationFormButton;