import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Navigation from 'components/Navigation';

function Header() {
    return (
        <HeaderStyled>
            <Box sx={{
                margin: '0 auto',
                width: '100%',
                padding: 30
            }}>
                <Navigation />
            </Box>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background: ${props => props.color ? '#ffffff' : '#000000'};
    padding: 30px;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
`

export default Header;