import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Image from 'next/image';

function About() {
    return(
        <>
            <AboutStyled>
                <h1>About Me</h1>
                <Flex justifyContent="space-evenly" flexDirection={{ _: "column", 1: "column", 2: "row" }}>
                    <Box className="image-container">
                        <Image 
                            src="https://res.cloudinary.com/ddbycjzyd/image/upload/v1623431089/20201215_153018_bqobn3.jpg" alt="" 
                            width={600} 
                            height={500} 
                        />
                    </Box>
                    <Box className="paragraph-container">
                        <p>
                            For starters, I have lived in Nashville for almost all of my life, and I currently work as a registered nurse in the area. 
                            It is a great place to live, find work in healthcare or tech among so many other fields, raise a family, and of course listen to great music. 
                            (I happen to not be a fan of modern-day country music at all, but the music scene here is so vast, it doesn’t even matter!)
                            I have worked in healthcare for what sums up to approximately 6 years, and I have worked as a registered nurse for the past 4 years. 
                            As rewarding as it is in being an RN, I have been feeling a consistent stress and angst, insofar as I am ready to be utilized and challenged in different ways. 
                            And what I mean by that more specifically is that I have been experiencing feelings of wanting to perform somewhat of a career conversion to computer programming.
                            This didn’t happen overnight. In fact, I’ve had my aim on this field for quite some time, but have not had the necessary means to go after it. 
                            Some deterring factors have been timing, self-doubt, and certain societal expectations just to name a few. 
                            At this point, I am self-actualized and I can say with extreme confidence that pursuing computer programming is just one of my many paths in life. 
                            I have been using and thoroughly enjoying computers since early adolescence. Overtime, I have become somewhat savvy in building, maneuvering, and manipulating them to my will.
                        </p>
                    </Box>
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
        padding: 0;
        margin: 1em;
        flex-shrink: 0;
        box-shadow: 0 0 20px rgba(0,0,0, 0.1);
    }
    
    .paragraph-container {
        max-width: 600px;
        padding: 0;
        margin: 1em;
    }

    p {
        color: white;
    }

`

export default About;