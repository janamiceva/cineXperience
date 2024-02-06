import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { auth } from '../../../auth/firebase-config';
import { Theme, styled, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthenticationFormButton from '../../authentication-form/button';
import HeaderMenuItem from './menu-item';
import HeaderDesktopMenu from './menu-desktop';
import HeaderMobileMenu from './menu-mobile';
import UserMenu from './user-menu';

const AppBarStyled = styled(AppBar)({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute'
})

const StyledTypography = styled(Typography)({
    fontWeight: 'bold'
})

function Header() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const navigate = useNavigate()
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBarStyled>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {isDesktop ? (
                        <HeaderDesktopMenu>
                            <HeaderMenuItem onClick={() => navigate('/aboutUs')}><StyledTypography>About Us</StyledTypography></HeaderMenuItem>
                            <HeaderMenuItem onClick={() => navigate('/movies')}><StyledTypography>Now Showing</StyledTypography></HeaderMenuItem>
                            <HeaderMenuItem onClick={() => navigate('/comingSoonMovies')}><StyledTypography>Coming soon</StyledTypography></HeaderMenuItem>
                        </HeaderDesktopMenu>
                    ) : (
                        <HeaderMobileMenu handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu} anchorElNav={anchorElNav}>
                            <HeaderMenuItem onClick={() => navigate('/aboutUs')}><StyledTypography>About Us</StyledTypography></HeaderMenuItem>
                            <HeaderMenuItem onClick={() => navigate('/movies')}><StyledTypography>Now Showing</StyledTypography></HeaderMenuItem>
                            <HeaderMenuItem onClick={() => navigate('/comingSoonMovies')}><StyledTypography>Coming soon</StyledTypography></HeaderMenuItem>
                        </HeaderMobileMenu>
                    )}

                    {auth?.currentUser ? (<UserMenu />) : <AuthenticationFormButton sx={(theme) => ({ fontSize: theme.spacing(2) })} onClick={() => navigate('/signIn')}>Sign in</AuthenticationFormButton>}
                </Toolbar>
            </Container>
        </AppBarStyled >
    );
}
export default Header;