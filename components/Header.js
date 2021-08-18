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
    background: ${props => props.color ? '#ffffff' : '#000000'};
    padding: 60px;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    margin: "0 auto";
`

export default Header;