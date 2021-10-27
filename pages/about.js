import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Image from 'next/image';
import { motion } from "framer-motion"

function About() {
    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Box sx={{
                    maxWidth: "1200px",
                    mx: "auto",                
                }}>
                    <Flex justifyContent="center" flexDirection={{ _: "column" }}>
                        <Box as="h2" className="paragraph-container" width={{ _: "100%" }}>
                            Hello there, welcome to my Portfolio Website!  Thanks for taking a look around.  Here's some more details about me...
                        </Box>
                        <Box className="image-container" width={{ _: "100%" }}>
                            <Image 
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/c_fit,h_600,w_500/v1632189261/20210908_105613_cigclw.jpg" alt="" 
                                width={500} 
                                height={600}
                                className="image"
                            />
                        </Box>
                    </Flex>
                </Box>
                <Box sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    alignContent: "center"
                }}>

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
        margin: 1em;
        text-align: center;
        transform: translate(-2%, 5%);
        margin: 10px;
    }

    .image {
        border-radius: 50px;
    }
    
    .paragraph-container {
        text-align: center;
        border-image-source: linear-gradient(to left, #d47fff, #7fffd4);
        border-width: 4px;
        border-image-slice: 1;
        padding: 0.5rem;
        box-shadow: 0 0 20px rgba(0,0,0, 0.1);
        color: #fff;
        font-size: 30px;
    }
`

export default About;