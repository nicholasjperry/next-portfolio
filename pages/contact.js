import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';


function ContactForm () {

    const [values, setValues] = useState({
        message: '',
        email: '',
        fullName: '',
    });
    // const [submitted, setSubmitted] = useState(false);

    const handleMessageChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            message: e.target.value
        }));
    };

    const handleEmailChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            email: e.target.value
        }));
    };

    const handleFullNameChange = (e) => {
        e.persist();
        setValues((values) => ({
            ...values,
            fullName: e.target.value
        }));
    };

    const logValues = () => {
        const { API_URL } = process.env;

        fetch(
            `${API_URL}/contacts`, {
                method: "post",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    message: values.message,
                    email: values.email,
                    name: values.fullName
                })
                
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.log("Error: ", error);
        });
    }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (

        <>
            <ContactStyled>
                <Box className="heading">
                    <h1>Get In Touch</h1>
                    <p>SEND ME A MESSAGE!</p>
                </Box>
                <Box sx={{
                        maxWidth: 1200,
                        mx: 'auto',
                        px: 3
                    }}>
                    <Flex alignContent="center" justifyContent="space-between" flexDirection={{ _: "column", 1: "row", 2: "row" }} flexWrap="wrap">
                        <Box width={{ _: "100%" }}>
                            <Input 
                                id="message" 
                                name="message" 
                                type="text" 
                                placeholder="Message" 
                                value={values.message} 
                                onChange={handleMessageChange} />    
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }}>
                            <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="Email" 
                                value={values.email}
                                onChange={handleEmailChange} />
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }}>
                            <Input 
                                id="name" 
                                name="fullName" 
                                type="name" 
                                placeholder="Full Name" 
                                value={values.fullName} 
                                onChange={handleFullNameChange} />
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }} mb={30}>
                            <Button className="send-button" backgroundColor="black" onClick={logValues}>Send</Button>
                        </Box>
                    </Flex>
                </Box>
            </ContactStyled>
        </>
    );
}

const ContactStyled = styled.div`
    .heading {
        text-align: center;
        margin-bottom: 40px;
    }

    .form-container{
        padding: 200px;
    }

    #message {
        height: 150px;
        padding-bottom: 120px;
    }

    .send-button{
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }
`

export default ContactForm;