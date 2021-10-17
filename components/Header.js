import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Navigation from 'components/Navigation';

function Header() {
    return (
        <HeaderStyled>
            <Box>
                <Navigation />
            </Box>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    
    background: #000000;
    margin: 0;
    min-height: 125px;
    position: sticky;
    width: 100%;
`

export default Header;