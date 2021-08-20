import styled from '@emotion/styled';
import { Box } from 'reflexbox';

const Home = () => {
    return (
        <>
            <HomeStyled>
                <Box className='welcome-text'>
                    <h1>Welcome To My Portfolio Website!</h1>
                    <h4>Browse my projects, read about my background, and feel free to contact me</h4>
                </Box>
            </HomeStyled>
        </>
    );
}

const HomeStyled = styled.div`
    .welcome-text {
        text-align: center;
        margin-top: 17%;
        font-size: 1.4em;
    }
    h4 {
        text-align: center;
    }
`

export default Home;