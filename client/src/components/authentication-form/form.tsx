import { Box, styled } from "@mui/material";
import React from "react";

type AuthenticationFormProps = {
    children: React.ReactNode
}

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    zIndex: '1',
    flexDirection: 'column',
    position: 'absolute',
    top: '30%',
    right: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '10%',
    padding: theme.spacing(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.spacing(37.5),
    width: theme.spacing(40),
    [theme.breakpoints.down('md')]: {
        top: '20%',
        right: '5%',
        maxWidth: '-webkit-fill-available',
        maxHeight: '-webkit-fill-available',
    }
}))

function AuthenticationForm({ children }: AuthenticationFormProps) {

    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}

export default AuthenticationForm;