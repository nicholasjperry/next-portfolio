import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Wave from 'react-wavify'

const Home = () => {

    return (
        <>
            <HomeStyled>
                <Box className="wave-container">
                    <h3>
                        Nick Perry - Software Developer
                    </h3>
                    <h4>
                        /*Browse my projects, read about my background, and feel free to contact me*/
                    </h4>
                    <Wave className="wave" fill="url(#gradient)" options={{ amplitude: 20, speed: 0.25, points: 4 }}>
                        <defs>
                            <linearGradient id="gradient" gradientTransform="rotate(90deg)">
                                <stop offset="10%" stopColor="#552586" />
                                <stop offset="90%" stopColor="#B589D6" />
                            </linearGradient>
                        </defs>
                    </Wave>
                </Box>
            </HomeStyled>
        </>
    );
}

const HomeStyled = styled.div`

    /* background-image: 
        linear-gradient(90deg, #552586, #B589D6); */

    .wave-container {
        text-align: center;
        color: #7fffd4;
        width: 100%;
        margin-top: 20vh;

        @media(max-width: 768px) {
            height: 450px;
        }

        h3 {
            font-size: 4rem;
        }
    }

    .wave {
        height: 40vh;
    }
`

export default Home;