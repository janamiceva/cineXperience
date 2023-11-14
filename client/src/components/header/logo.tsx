import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Link, Typography, styled } from '@mui/material';

const StyledTypography = styled(Typography)(({theme}) => ({
    color: 'inherit',
    textDecoration: 'none',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexGrow: 1
    }
}))

const StyledLink = styled(Link)({
    color: 'inherit',
    textDecoration: 'none',
})

function Logo() {

    return (
        <>
            <AdbIcon sx={{ mr: 1 }} />
            <StyledTypography variant='h6'noWrap>
                <StyledLink href="/homePage">cineXperience</StyledLink>
            </StyledTypography>
        </>
    )
}

export default Logo;