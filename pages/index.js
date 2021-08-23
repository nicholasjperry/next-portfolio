import styled from '@emotion/styled';
import { Box } from 'reflexbox';

const Home = () => {
    return (
        <>
            <HomeStyled>
                <Box className="curved-top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1440 319">
                        <path fill="#7fffd4" 
                            fill-opacity="1" 
                            d="M0,192L34.3,181.3C68.6,171,137,149,206,138.7C274.3,128,343,128,411,144C480,160,549,192,617,176C685.7,160,754,96,823,101.3C891.4,107,960,181,1029,197.3C1097.1,213,1166,171,1234,149.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                        </path>
                    </svg>
                </Box>
                <Box className="curved-bottom">
                    <h1>Welcome To My Portfolio Website!</h1>
                    <h4>Browse my projects, read about my background, and feel free to contact me</h4>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1440 319">
                        <path fill="#ff44d4" 
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

    text-align: center;
    background: #7fffd4;
    margin-bottom: 0 auto;
    max-height: 1200px;

    h4 {
        text-align: center;
    }

    svg {
        display: block;
    }
    
    .curved-top {
        background: #ff44d4;
    }

    .curved-bottom {
        margin: 0;
        padding: 0;
    }
`

export default Home;