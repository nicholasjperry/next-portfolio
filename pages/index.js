import styled from '@emotion/styled';
import { Box } from 'reflexbox';

const Home = () => {
    return (
        <>
            <HomeStyled>
                <Box className='welcome-text'>
                    <h1>Welcome to my Portfolio Website!</h1>
                    <p>Browse my projects, read about my background, and feel free to contact me!</p>
                </Box>
            </HomeStyled>
        </>
    );
}

const HomeStyled = styled.div`
    .welcome-text {
        text-align: center;
        margin-top: 17%;
    }
    p {
        text-align: center;
        color: #DEDEDE;
    }
`

export default Home;