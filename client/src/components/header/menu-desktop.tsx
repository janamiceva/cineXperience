import { Box, BoxProps, styled } from "@mui/material";

type HeaderDesktopMenuProps = {
    children: React.ReactNode
} & BoxProps

const StyledBox = styled(Box)(({theme}) =>({
    flexGrow: 1,
    display: 'flex',
}))

function HeaderDesktopMenu({ children }: HeaderDesktopMenuProps) {

    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}

export default HeaderDesktopMenu;