import { Box, BoxProps, IconButton, Menu, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

type HeaderMobileMenuProps = {
    children: React.ReactNode,
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
    handleCloseNavMenu: () => void,
    anchorElNav: HTMLElement | null,
} & BoxProps

const StyledBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
}))

function HeaderMobileMenu({ children, handleOpenNavMenu, handleCloseNavMenu, anchorElNav }: HeaderMobileMenuProps) {

    return (
        <StyledBox>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {children}

            </Menu>
        </StyledBox>

    )
}

export default HeaderMobileMenu;