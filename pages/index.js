import styled from '@emotion/styled';
import { Box } from 'reflexbox';

const Home = () => {
    return (
        <>
            <HomeStyled>
                <Box className="box-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                        <defs>
                            <linearGradient id="gradient">
                                <stop offset="1%" stopColor="#552586" />
                                <stop offset="99%" stopColor="#B589D6" />
                            </linearGradient>
                        </defs>
                        <path 
                            fill="url(#gradient)"
                            fill-opacity="1" 
                            d="M0,192L34.3,181.3C68.6,171,137,149,206,138.7C274.3,128,343,128,411,144C480,160,549,192,617,176C685.7,160,754,96,823,101.3C891.4,107,960,181,1029,197.3C1097.1,213,1166,171,1234,149.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                        </path>
                    </svg>
                </Box>
                <Box className="text-section">
                    <h3>
                        Nick Perry - Software Developer
                    </h3>
                    <h4>
                        /*Browse my projects, read about my background, and feel free to contact me*/
                    </h4>
                </Box>
                <Box className="bottom-curve">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                        <defs>
                            <radialGradient id="yo">
                                <stop offset="5%" stopColor="#36454f" />
                                <stop offset="95%" stopColor="#000000" />
                            </radialGradient>
                        </defs>
                        <path
                            fill="url(#yo)"
                            fill-opacity="1" 
                            d="M0,192L34.3,181.3C68.6,171,137,149,206,138.7C274.3,128,343,128,411,144C480,160,549,192,617,176C685.7,160,754,96,823,101.3C891.4,107,960,181,1029,197.3C1097.1,213,1166,171,1234,149.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                        </path>
                    </svg>
                </Box>
            </HomeStyled>
        </>
    );
}

const HomeStyled = styled.div`

    background-image: 
            linear-gradient(90deg, #552586, #B589D6);
    
    .box-top {
        background: radial-gradient(circle at top, #36454f, #000000);
    }

    .text-section {
        color: #7fffd4;
        height: 250px;

        @media(max-width: 768px) {
            height: 450px;
        }
    }

    .text-section h3 {
        font-size: 4rem;
        text-align: center;
    }

    .text-section h4 {
        text-align: center;
    }

    svg {
        display: block;
    }
`

export default Home;