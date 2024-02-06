import { Box, BoxProps, styled } from "@mui/material";
import Logo from "./logo";

type HeaderDesktopMenuProps = {
    children: React.ReactNode
} & BoxProps

const StyledBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    marginLeft: theme.spacing(2)
}))

function HeaderDesktopMenu({ children }: HeaderDesktopMenuProps) {

    return (
        <>
            <Logo />
            <StyledBox>
                {children}
            </StyledBox>
        </>
    )
}

export default HeaderDesktopMenu;