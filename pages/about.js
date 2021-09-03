import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Image from 'next/image';

function About() {
    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Box className="image-container">
                    <Image 
                        src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1623431089/20201215_153018_bqobn3.jpg" alt="" 
                        width={600} 
                        height={500} 
                    />
                </Box>
            </AboutStyled>
        </>
    );
}

const AboutStyled = styled.div `

    h1 {
        text-align: center;
    }

    .image-container {
        padding: 0;
        margin: 0 auto;
        max-width: 600px;
    }
    
    .image {
        box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    }
`

export default About;