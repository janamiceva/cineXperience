import { Box, Typography, styled } from "@mui/material";
import image1 from '../../static/images/image3.jpeg'
import image2 from '../../static/images/image2.webp'


const StyledHeader = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bolder',
    paddingTop: theme.spacing(6.25),
    paddingBottom: theme.spacing(1),
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    textAlign: 'justify'
}))

const StyledContainer = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
    }
}))

const StyledBox = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 5)
}))

const Container = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(15),
    padding: theme.spacing(0, 6.25),
    [theme.breakpoints.down('md')]: {
        padding: 0,
    }
}))

function AboutUs() {
    return (
        <Container>
            <StyledContainer>
                <img src={image1} style={{ height: '400px' }} />

                <StyledBox>
                    <StyledHeader variant="h5" sx={{ paddingTop: '0' }}>About Us</StyledHeader>
                    <StyledTypography>Welcome to cineXperience, where the magic of cinema meets the convenience of online ticket booking. </StyledTypography>
                    <StyledTypography>At cineXperience, we believe in more than just movies, we believe in creating unforgettable experiences for every film enthusiast.</StyledTypography>
                    <StyledHeader variant="h5">Our Story</StyledHeader>
                    <StyledTypography>Founded 2023, cineXperience was born out of a shared love for the silver screen. Tired of the hassle of traditional ticketing, we set out to create a platform that seamlessly combines the thrill of cinema with the ease of online booking. Our journey began with a simple vision: to make the process of securing your seat for the latest blockbuster as enjoyable as watching the movie itself.</StyledTypography>

                </StyledBox>
            </StyledContainer>
            <StyledContainer sx={{ marginTop: '50px' }}>
                <StyledBox>
                    <StyledHeader variant="h5" sx={{ paddingTop: '0' }}>Our Commitment</StyledHeader>
                    <StyledTypography>We are committed to bringing you the latest releases, timeless classics, and everything in between. Our partnerships with cinemas across [your area/country] ensure that you have access to a wide array of choices, all at your fingertips. Your convenience is our priority, and our user-friendly interface reflects our dedication to making your ticket booking experience smooth and enjoyable.</StyledTypography>
                    <StyledHeader variant="h5">Join the cineXperience Community</StyledHeader>
                    <StyledTypography>cineXperience is more than a ticketing platform; it's a community of passionate moviegoers. Follow us on social media to stay updated on the latest releases, exclusive promotions, and behind-the-scenes glimpses. Your journey with cineXperience doesn't end at the ticket counter, it extends to the shared excitement of fellow movie buffs.</StyledTypography>
                </StyledBox>
                <img src={image2} style={{ height: '400px' }} />
            </StyledContainer>
            <StyledContainer sx={{ marginTop: '50px' }}>
                <iframe src="https://maps.google.com/maps?width=0&amp;height=400&amp;hl=en&amp;q=east%20gate%20Skopje+(cineXperience)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                <StyledBox>
                    <StyledHeader variant="h5" sx={{ paddingTop: '0' }}>Location</StyledHeader>
                    <StyledTypography>Nestled in the heart of Skopje, East Gate Mall (2nd floor), cineXperience is proud to be your go-to destination for cinematic adventures. Our central location is more than just an address; it's a hub for movie lovers, conveniently situated to bring the magic of the big screen closer to you.</StyledTypography>
                    <StyledHeader variant="h5">Contact us</StyledHeader>
                    <StyledTypography>We value your feedback and are here to assist you. If you have any questions, suggestions, or just want to share your latest cinematic discovery, feel free to reach out to our dedicated support team at cineXperence-support@email.com .</StyledTypography>
                    <StyledTypography sx={{ fontStyle: 'italic', paddingTop: '40px' }}>Thank you for choosing cineXperience – where every movie night becomes an unforgettable experience.</StyledTypography>
                </StyledBox>

            </StyledContainer>
        </Container>
    )
}

export default AboutUs;