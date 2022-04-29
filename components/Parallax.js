import styled from '@emotion/styled';
import { Box } from 'reflexbox';

export default function Parallax() {
    return(
        <ParallaxStyled>
            <Box className="parallax"></Box>
        </ParallaxStyled>
    );
}

const ParallaxStyled = styled.div`
    .parallax {
        background-image: url("https://res.cloudinary.com/ddbycjzyd/image/upload/v1649884917/buenavista_r3gz0q.jpg");
        margin-top: 100px;
        min-height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`