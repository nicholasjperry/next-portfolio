import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Link from 'next/link';
import { Button } from 'rebass';
import Wave from 'react-wavify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    return (
        <>
            <HomeStyled>
                <Box className="wave-container">
                    <h1>Hi, I'm Nick Perry!</h1>
                    <h2> -Software Developer- </h2>
                    <Box className="resume-text-button-container">
                        <h3>Download my resume</h3>
                        <a href="resume.pdf" target="_blank">
                            <FontAwesomeIcon className="icon" icon={faArrowAltCircleDown} />
                        </a>
                        <Link href="/contact">
                            <Button className="button">
                                Contact Me
                            </Button>
                        </Link>
                    </Box>
                    <Wave className="wave" fill="url(#gradient)" options={{ amplitude: 30, speed: 0.25, points: 4 }}>
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
        margin-top: 10vh;
        overflow: auto;

        h1 {
            text-align: center;
            color: #7fffd4;

            @media(max-width: 768px) {
                margin-top: 0;
            }
        }

        h2 {
            text-align: center;
            color: #7fffd4;
            font-size: 3rem;
        }
    }
    
    .resume-text-button-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 1vw;
        
        @media(max-width: 768px) {
            display: flex;
            flex-direction: column;
        }

        h3 {
            color: #fff;
        }

        .icon {
            height: 35px;
            background-color: #000000;
            color: #fff;
            cursor: pointer;
            border-radius: 50%;
        }
        
        .button {
            background-color: #44d4ff;
            color: #000000;
            font-weight: bold;
            padding: 15px;
            border-radius: 15px;
            width: 135px;
            cursor: pointer;
            margin-left: 30px;
            font-family: 'Nova Mono', monospace;

            @media(max-width: 768px) {
                margin: 0;
                justify-content: center;
                margin-top: 30px;
                width: 200px;
             }
        }
    }

    .wave {
        height: 50vh;

        @media(max-width: 768px) {
            height: 30vh;
        }
    }
`

export default Home;