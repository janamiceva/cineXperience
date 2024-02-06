import { styled } from '@mui/material';
import logoImage from '../../../static/images/logo.png'
import { useNavigate } from 'react-router-dom';

const StyledImage = styled('img')(({ theme }) => ({
    width: '8%',
    height: '8%',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        left: '45%',
        width: 'auto',
        height: '100%',
    }
}))


function Logo() {
    const navigate = useNavigate();

    return (
        <StyledImage src={logoImage} onClick={() => navigate('/homePage')} />
    )
}

export default Logo;