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
        background-image: url(../images/buenavista2.jpeg);
        margin-top: 100px;
        min-height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`