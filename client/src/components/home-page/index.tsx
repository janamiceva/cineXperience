import { Box, Tab, Tabs, styled } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import useGetMovies from "../../hooks/use-get-movies";
import Movie from "../../types/movie";
import CarouselItem from "../carousel/item";
import React, { useState } from "react";
import useHomePageTabs from "./use-home-page-tabs";

const StyledTab = styled(Tab)({
    color: 'white',
    '&.MuiButtonBase-root.Mui-selected': {
        color: 'white'
    }
})

const StyledTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center'
    }
})

function HomePage() {

    const { data: movies } = useGetMovies()
    const { HomePageTabs } = useHomePageTabs()
    const [activeTab, setActiveTab] = useState('1');

    const handleChangeTab = (_event: React.SyntheticEvent, newActiveTab: string) => {
        setActiveTab(newActiveTab);
    }

    return (
        <Box>
            <Carousel sx={(theme) => ({ marginTop: theme.spacing(11.25), marginBottom: theme.spacing(6.25) })}>
                {
                    movies?.map((movie: Movie, i: number) => <CarouselItem key={i} item={movie} image={movie.image} />)
                }
            </Carousel>
            <StyledTabs TabIndicatorProps={{ style: { backgroundColor: "red" } }} value={activeTab} onChange={handleChangeTab}>
                {HomePageTabs.map((tab) => (
                    <StyledTab key={tab.value} value={tab.value} label={tab.label} />
                ))}
            </StyledTabs>
            <Box sx={(theme) => ({ display: 'flex', flexWrap: 'wrap', padding: theme.spacing(6.25) })}>
                {HomePageTabs.map((tab) => (
                    activeTab === tab.value && tab.content
                ))}
            </Box>
        </Box>
    )
}
export default HomePage;