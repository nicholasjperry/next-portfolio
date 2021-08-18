import styled from '@emotion/styled';
import { Box } from 'reflexbox';

function Footer() {
    return(
        <FooterStyled>
            <Box sx={{
                margin: "0 auto",
                width: "100%",
                padding: 20
            }}>

            </Box>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`

`

export default Footer;