import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Wave from 'react-wavify';

const Home = () => {

    return (
        <>
            <HomeStyled>
                <Box className="wave-container">
                    <h1>Hi, I'm Nick Perry!</h1>
                    <h2> -Software Developer- </h2>
                    <h3>/*Browse my projects, read about my background, and feel free to contact me*/</h3>
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

    margin: 0;
    padding: 0;

    .wave-container {
        width: 100%;
        margin-top: 14vh;

        h1 {
            text-align: center;
            color: #7fffd4;
        }

        h2 {
            text-align: center;
            color: #7fffd4;
            font-size: 3rem;
        }

        h3 {
            text-align: center;
            color: #fff;
            margin-bottom: 4vh;
        }
    }

    .wave {
        height: 40vh;
    }
`

export default Home;