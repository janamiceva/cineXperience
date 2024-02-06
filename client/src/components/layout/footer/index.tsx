import { AppBar, Box, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <AppBar sx={{ backgroundColor: 'black', position: 'fixed', height: '50px', width: '100%', bottom: 0, top: 'auto' }}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <CopyrightIcon sx={{ color: 'white' }} />
                <Typography sx={{ color: 'white' }}>2024 cineXperience, All right reserved.</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
               <FacebookIcon sx={{ color: 'white', paddingRight: '10px'}}/>
               <InstagramIcon sx={{ color: 'white',  paddingRight: '10px' }}/>
               <TwitterIcon sx={{ color: 'white', }}/>
            </Box>
        </AppBar>
    )
}

export default Footer;