import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { Input } from '@rebass/forms';
import { Button } from 'rebass';


function ContactForm () {
    return (
        <>
            <ContactStyled>
                <Box className="heading">
                    <h1>Get In Touch</h1>
                    <p>SEND ME A MESSAGE!</p>
                </Box>
                <Flex flexWrap="wrap">
                    <Box width={1} px={400}>
                        <Input id="message" name="message" placeholder="Message" />    
                    </Box>
                    <Flex width={1} px={400} sx={{ gridGap: '5px', marginTop: '10px' }}>
                        <Box width={1/3}>
                            <Input id="email" name="email" type="email" placeholder="Email"/>
                        </Box>
                        <Box width={1/3}>
                            <Input id="name" name="name" type="name" placeholder="Full Name"/>
                        </Box>
                        <Box width={1/3} mb={30}>
                            <Button className="send-button" backgroundColor="black">Send</Button>
                        </Box>
                    </Flex>
                </Flex>
            </ContactStyled>
        </>
    );
}

const ContactStyled = styled.div`
    .heading {
        text-align: center;
        margin-bottom: 40px;
    }

    #message {
        height: 150px;
        padding-bottom: 120px;
    }
    
    .send-button{
        width: 290px;
        padding: 10px;
        border-radius: 10px;
    }
`

export default ContactForm;