import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Image from 'next/image';

function About() {
    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Flex flexWrap="wrap" justifyContent="space-evenly" flexDirection={{ _: "column", 1: "column", 2: "row" }}>
                    <Box className="image-container">
                        <Image 
                            src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1623431089/20201215_153018_bqobn3.jpg" alt="" 
                            width={600} 
                            height={500} 
                        />
                    </Box>
                    <Box className="paragraph-container">
                        <p>
                            I have worked in healthcare for what sums up to approximately 6 years, and I have worked as a registered nurse for the past 4 years. 
                            As rewarding as it is in being an RN, I have been feeling a consistent stress and angst, insofar as I am ready to be utilized and challenged in different ways. 
                            And what I mean by that more specifically is that I have been experiencing feelings of wanting to perform somewhat of a career conversion to computer programming.
                        </p>
                        <p>
                            This didn’t happen overnight. In fact, I’ve had my aim on this field for quite some time, but have not had the necessary means to go after it. 
                            Some deterring factors have been timing, self-doubt, and certain societal expectations just to name a few. 
                            At this point, I am self-actualized and I can say with extreme confidence that pursuing computer programming is just one of my many paths in life.
                        </p>
                    </Box>
                    {/* <Box className="image-container">
                        <Image src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1632189261/20210908_105613_cigclw.jpg" alt=""
                            width={600}
                            height={600}
                        />
                    </Box> */}
                </Flex>
            </AboutStyled>
        </>
    );
}

const AboutStyled = styled.div `

    max-width: 2000px;
    

    h1 {
        text-align: center;
    }

    .image-container {
        max-width: 600px;  
        max-height: 500px;
        padding: 0;
        margin: 1em;
        flex-shrink: 0;
        box-shadow: 0 0 20px rgba(0,0,0, 0.1);
    }
    
    .paragraph-container {
        text-indent: 5%;
        max-width: 600px;
        height: 100%;
        margin: 1em;
        /* border-image-source: linear-gradient(to left, #d47fff, #7fffd4);
        border-width: 5px;
        border-image-slice: 1; */
        padding: 1rem;
        /* box-shadow: 0 0 20px rgba(0,0,0, 0.1); */
        color: #fff;
    }
`

export default About;