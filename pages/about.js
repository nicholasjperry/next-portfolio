import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Image from 'next/image';
import { motion } from "framer-motion";
import TechnologiesUsed from '../components/TechnologiesUsed';
import Parallax from '../components/Parallax';
import AboutTextAnimation from '../components/AboutTextAnimation';

function About({ technologies }) {

    return(
        <Box className="background">
            <AboutStyled>
                <motion.div
                    animate={{ y: [-75, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>About Me</h1>
                </motion.div>
                <Box sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    p: 3,
                    mt: -40           
                }}>
                    <Flex 
                        justifyContent="center" 
                        alignContent="center" 
                        alignItems="center" 
                        flexDirection={{ _: "column", 1: "column", 2: "row" }}
                    >
                        <Box className="image-container" width={{ _: "60%" }}>
                            <Image 
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/c_scale,w_1252/v1642734312/mtbelfordpic_mpa5th.jpg" alt="" 
                                width={450} 
                                height={600}
                                className="image"
                            />
                        </Box>
                        <Box as="h2" className="paragraph-container" width={{ _: "60%" }}>
                            <AboutTextAnimation />
                        </Box>
                    </Flex>
                </Box>
                <h1>Technologies I Use</h1>
                <TechnologiesUsed technologies={technologies}/>
                <Parallax />
                <Box sx={{
                    maxWidth: 1400,
                    mx: "auto",                
                    my: "100px",
                    px: 3
                }}>
                    <h1>Education</h1>
                    <Flex 
                        sx={{ gridGap: 4 }} 
                        mt={60} justifyContent="center" 
                        alignContent="center" 
                        flexDirection={{ _: "column", 1: "column", 2: "row" }}
                    >
                        <Box className="logo-container" width={{ _: "100%", 1: "50%" }}>
                            <Image
                                src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1643592285/nucamplogo_in9d6t.svg" alt=""
                                width={500}
                                height={150}
                            />
                        </Box>
                        <Box className="paragraph-container" sx={{ textAlign: "left", color: "#fff", fontSize: "25px", marginBottom: 200 }} width={{ _: "100%", 1: "70%" }}>
                            Attended this hybrid coding bootcamp, in which Javascript was heavily utilized.  MongoDB, Express.js, React/React Native, and Node.js
                            (MERN) were employed in a multitude of coding exercises as well as to the guided construction of NuCamp's mock web app layed out for 
                            the students to recreate.
                        </Box>
                    </Flex>
                </Box>
            </AboutStyled>            
        </Box>
    );
}

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/technologies`);
    const data = await res.json();

    return {
        props: {
            technologies: data
        }
    }
}

const AboutStyled = styled.div `

    h1 {
        text-align: center;
    }

    .image-container {
        margin-bottom: 4rem;
        text-align: center;
        transform: translate(-2%, 5%);
    }

    .image {
        border-radius: 50%;
    }
    
    .paragraph-container {
        text-align: center;
        border-image-source: linear-gradient(to left, #d47fff, #7fffd4);
        border-width: 4px;
        border-image-slice: 1;
        padding: 0.5rem;
        box-shadow: 0 0 20px rgba(0,0,0, 0.1);
        color: #7fffd4;
    }

    .logo-container{
        text-align: center;
    }
`

export default About;