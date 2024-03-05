import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from "react-router-dom";

const MAX_VISIBILITY = 3;
const cardSize = '23rem'

const StledButton = styled(Button)({
    color: 'red',
    fontSize: '5rem',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    zIndex: 2,
    cursor: 'pointer',
    userSelect: 'none',
    background: 'unset',
    border: 'unset'
})

function Carousel({ children }: {children: JSX.Element}) {
    const { id } = useParams()
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);

    useEffect(() => {
        setActive(0);
    }, [id])

    return (
        <Box sx={{ width: '250px', height: cardSize, perspective: '500px', transformStyle: 'preserve-3d' }}>
            {active > 0 && <StledButton sx={{ transform: 'translateX(-100%) translateY(-50%)', }} onClick={() => setActive(i => i - 1)}><ArrowBackIosIcon sx={{ color: 'red' }} /></StledButton>}
            {React.Children.map(children, (child, i) => (
                <Box sx={{
                    position: 'absolute',
                    flexGrow: 1,
                    filter: 'blur(calc(var(--abs-offset) * 1rem))',
                    transition: 'all 0.3s ease-out',
                    transform:
                        `rotateY(calc(var(--offset) * 50deg)) 
                    scaleY(calc(1 + var(--abs-offset) * -0.4))
                    translateZ(calc(var(--abs-offset) * -30rem))
                    translateX(calc(var(--direction) * -5rem))`,
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </Box>
            ))}
            {active < count - 1 && <StledButton sx={{ right: 0, transform: 'translateX(100%) translateY(-50%)' }} onClick={() => setActive(i => i + 1)}><ArrowForwardIosIcon sx={{ color: 'red' }} /></StledButton>}
        </Box>
    );
};

export default Carousel;