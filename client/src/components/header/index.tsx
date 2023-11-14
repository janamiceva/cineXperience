import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { auth } from '../../auth/firebase-config';
import { Theme, styled, useMediaQuery } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AuthenticationFormButton from '../authentication-form/button';
import Logo from './logo';
import HeaderMenuItem from './menu-item';
import HeaderDesktopMenu from './menu-desktop';
import HeaderMobileMenu from './menu-mobile';
import UserMenu from './user-menu';

const settings = ['Profile', 'Dashboard', 'Logout'];

const AppBarStyled = styled(AppBar)({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute'
})

function Header() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const navigate = useNavigate()
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBarStyled>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {isDesktop ? (
                        <>
                            <Logo />
                            <HeaderDesktopMenu>
                                <HeaderMenuItem onClick={() => navigate('/aboutUs')}><Typography>About Us</Typography></HeaderMenuItem>
                                <HeaderMenuItem onClick={() => navigate('/movies')}><Typography>Now Showing</Typography></HeaderMenuItem>
                            </HeaderDesktopMenu>
                        </>
                    ) : (
                        <>
                            <HeaderMobileMenu handleOpenNavMenu={handleOpenNavMenu} handleCloseNavMenu={handleCloseNavMenu} anchorElNav={anchorElNav}>
                                <HeaderMenuItem onClick={() => navigate('/aboutUs')}><Typography>About Us</Typography></HeaderMenuItem>
                                <HeaderMenuItem onClick={() => navigate('/movies')}><Typography>Now Showing</Typography></HeaderMenuItem>
                            </HeaderMobileMenu>
                            <Logo />
                        </>
                    )}



                    {auth?.currentUser ? ( <UserMenu/> ) : <AuthenticationFormButton onClick={() => navigate('/signIn')}>Sign in</AuthenticationFormButton>}
                </Toolbar>
            </Container>
        </AppBarStyled >
    );
}
export default Header;