import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Image from 'next/image';

function About() {
    return(
        <>
            <AboutStyled>
                <Box className="about-container">
                    <h1>About Me</h1>
                    <Image src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1623431089/20201215_153018_bqobn3.jpg" alt="" width={600} height={500} />
                </Box>
            </AboutStyled>
        </>
    );
}

const AboutStyled = styled.div `
    .about-container {
        text-align: center;
        top: 0;
    }
`

export default About;