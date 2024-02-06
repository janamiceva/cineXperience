import { styled } from "@mui/material";
import Header from "./header";
import backgroundImage from '../../static/images/background.webp';


type LayoutProps = {
    children: React.ReactNode;
}

const StyledImage = styled('img')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover'
})

function LayoutForAuthPage({ children }: LayoutProps) {

    return (
        <>
            <Header />
            {children}
            <StyledImage src={backgroundImage} />
        </>
    )
}

export default LayoutForAuthPage;