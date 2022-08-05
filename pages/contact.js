import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { Input } from '@rebass/forms';
import { Button } from 'rebass';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import HeaderMotion from '../components/HeaderMotion';


function ContactForm () {

    const [values, setValues] = useState({
        message: '',
        email: '',
        fullName: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

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
        .then(alert('Thank you for your message!'))
        .catch((error) => {
            console.log("Error: ", error);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.message && values.email && values.fullName) {
            setValid(true);
            logValues();
        }
        setSubmitted(true);
    }

    return (
        <Box className="background">
            <ContactStyled>
                <Box classname="headings">
                    <HeaderMotion>
                        <h1 style={{  textAlign: "center" }}>Get In Touch</h1>
                    </HeaderMotion>
                    <h2 style={{ textAlign: "center" }}>Send Me A Message</h2>
                </Box>
                <Box sx={{
                        maxWidth: 1200,
                        mx: "auto",
                        px: 3,
                    }} 
                        as="form" 
                        onSubmit={handleSubmit}
                >
                    <Flex 
                        sx={{ gap: 3 }} 
                        justifyContent="space-between" 
                        flexDirection={{ _: "column", 1: "row", 2: "row" }} 
                        flexWrap="wrap"
                    >
                        <Box width={{ _: "100%" }}>
                            <Input 
                                id="message" 
                                name="message" 
                                type="text" 
                                placeholder="Message" 
                                value={values.message} 
                                onChange={handleMessageChange} />
                                {submitted && !values.message && <span id="message-error">Please enter a message</span>}    
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }}>
                            <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="Email" 
                                value={values.email}
                                onChange={handleEmailChange} />
                                {submitted && !values.email && <span id="email-address-error">Please enter a valid email address</span>}
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }}>
                            <Input 
                                id="name" 
                                name="fullName" 
                                type="name" 
                                placeholder="Full Name" 
                                value={values.fullName} 
                                onChange={handleFullNameChange} />
                                {submitted && !values.fullName && <span id="fullname-error">Please enter your full name</span>}
                        </Box>
                        <Box width={{ _: "100%", 1: "30%" }}>
                            <Button className="send-button">Send</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box sx={{
                        maxWidth: 1200,
                        mx: "auto",
                        mt: 30,
                        color: "#fff"
                    }}
                    className="phone-email-container"
                >
                    <Flex 
                        sx={{ m: 3, marginBottom: 300 }} 
                        alignItems="center" 
                        justifyContent="center" 
                        flexDirection={{ _: "column", 1: "row", 2: "row", 3: "row" }} 
                        flexWrap="wrap"
                    >
                        <Box width={{ _: "100%", 1: "5%", 2: "5%" }}>
                            <p>Phone</p>
                        </Box>
                        <Box width={{ _: "100%", 1: "5%", 2: "5%" }}>
                            <FontAwesomeIcon icon={faAddressBook}/>:
                        </Box>
                        <Box width={{ _: "100%", 1: "90%", 2: "90%" }}>
                            <a href="tel:+1-615-414-3464">615-414-3464</a>
                        </Box>
                        <Box width={{ _: "100%", 1: "5%", 2: "5%" }}>
                            <p>Email</p>
                        </Box>
                        <Box width={{ _: "100%", 1: "5%", 2: "5%" }}>
                            <FontAwesomeIcon icon={faEnvelope}/>:
                        </Box>
                        <Box width={{ _: "100%", 1: "90%", 2: "90%" }}>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholasjperry1@gmail.com">nicholasjperry1@gmail.com</a>
                        </Box>
                    </Flex>
                </Box>
            </ContactStyled>
        </Box>
    );
}

const ContactStyled = styled.div`
    .headings {
        text-align: center;
        margin-bottom: 40px;
    }

    #message {
        height: 150px;
        padding-bottom: 120px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #message-error {
        color: #d47fff;
    }
    
    #email {
        padding-bottom: 10px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #email-address-error {
        color: #d47fff;
    }
    
    #name {
        padding-bottom: 10px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #fullname-error {
        color: #d47fff;
    }

    .send-button{
        width: 100%;
        padding: 10px;
        padding-bottom: 10px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.2);
        cursor: pointer;
        background-color: #7fffd4;
        color: black;
        border-radius: 10px;
        font-family: 'Nova Mono', monospace;
    }
    .phone-email-container {
        p {
            color: #7fffd4;
        }

        a {
            color: #fff;
        }
    }
`

export default ContactForm;