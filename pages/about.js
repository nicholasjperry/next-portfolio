import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
    
    const TechnologiesUsed = () => {
    
        const {ref, inView} = useInView({
        });
        const animation = useAnimation();
    
        useEffect(() => {
            if (inView) {
                animation.start( {opacity: 1 }, { duration: 2 } );
            }
            if (!inView) {
                animation.start({opacity: 0})
            }
        }, [inView]);
    
        return(
            <motion.div ref={ref} animate={animation}>
                <Box sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                        alignContent: "center",
                        
                    }}
                >
                    <Flex justifyContent="space-between"  alignItems="center" flexDirection={{ _: "column", 1: "row", 2: "row" }} mt={30} mb={30} sx={{ gap: 100}}>
                        <Box width={{ _: "100%", 1: "100%", 2: "33%" }}>
                            <Image 
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/c_crop,e_bgremoval,o_100,q_100/v1636141680/next-js-logo_yhajpm.png" 
                                width={300}
                                height={150}
                            />
                        </Box>
                        <Box width={{ _: "100%", 1: "100%", 2: "33%" }}>
                            <Image 
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/c_scale,w_400/v1636749752/strapi-logo_jy88ad.jpg" 
                                width={400}
                                height={119}
                            />
                        </Box>
                        <Box width={{ _: "100%", 1: "100%", 2: "33%" }}>
                            <Image 
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/c_scale,e_bgremoval,o_100,q_100,w_400/v1636750266/react-logo_ypxc5q.svg" 
                                width={300}
                                height={150}
                            />
                        </Box>
                    </Flex>
                </Box>
            </motion.div>
        );
    }

    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Box sx={{
                    maxWidth: 1200,
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
                <h1>Technologies I Use</h1>
                <TechnologiesUsed />
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
    
    .technologies {
        color: white;
        width: 100%;
        height: 100px;
    }
`

export default About;