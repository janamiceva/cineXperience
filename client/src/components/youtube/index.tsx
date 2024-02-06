import { Theme, useMediaQuery } from "@mui/material";
import YouTube from "react-youtube";

type YouTubeVideoProps = {
    videoId: 'string'
} 

function YouTubeVideo({videoId}: YouTubeVideoProps ) {
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    const opts = isDesktop? {
        height: '490',
        width: '800',
        playerVars: {
            autoplay: 0,
        },
    } : {
        height: '390',
        maxWidth: '300',
        playerVars: {
            autoplay: 0,
        },
    };
    

    return (
        <YouTube data-testid="video" videoId={videoId} opts={opts} style={{display: 'flex', justifyContent: 'center'}}/>
    );
};

export default YouTubeVideo