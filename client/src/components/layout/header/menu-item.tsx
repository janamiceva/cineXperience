import { Button, ButtonProps, styled } from "@mui/material";

type HeaderMenuItemProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
} & ButtonProps

const StyledButton = styled(Button)(({theme})=> ({
    my: 2, 
    color: 'white', 
    fontWeight: 'bold',
    display: 'block',
    [theme.breakpoints.down('md')]: {
        color: 'black', 
        fontWeight: 'unset',
    }
}))

function HeaderMenuItem({ onClick, children }: HeaderMenuItemProps) {
    return (
        <StyledButton onClick={onClick} >
            {children}
        </StyledButton>
    )
}

export default HeaderMenuItem;