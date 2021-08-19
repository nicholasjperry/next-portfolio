import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Image from 'next/image';

function About() {
    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Image 
                    src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1623431089/20201215_153018_bqobn3.jpg" alt="" 
                    width={600} 
                    height={500} 
                    className="image"
                />
            </AboutStyled>
        </>
    );
}

const AboutStyled = styled.div `
    text-align: center;
    top: 0;

    .image {
        box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    }
`

export default About;