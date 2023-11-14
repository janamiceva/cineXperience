import { Box, styled } from "@mui/material";
import Header from "../header";

type LayoutProps = {
    children: React.ReactNode;
}

const StyledImage = styled('img')(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover'
}))

function Layout({ children }: LayoutProps) {

    return (
        <>
            <Header />
            {children}
            <StyledImage src="https://ktla.com/wp-content/uploads/sites/4/2022/09/movie-theater-popcorn.jpg?strip=1" />
        </>
    )
}

export default Layout;