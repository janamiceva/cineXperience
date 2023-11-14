import { Typography, TypographyProps, styled } from "@mui/material";

const StyledTypography = styled(Typography)(({theme}) => ({
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute', 
    top: theme.spacing(3), 
}));

type AuthenticationTypographyProps = {
    children: React.ReactNode
} & TypographyProps

function AuthenticationTypography({ children, ...rest }: AuthenticationTypographyProps) {

    return (
        <StyledTypography variant="h5" {...rest}>
            {children}
        </StyledTypography>
    )
}

export default AuthenticationTypography;