import styled from '@emotion/styled';
import { Box } from 'reflexbox';
import Navigation from 'components/Navigation';

function Header({ isLight }) {
    return (
        <HeaderStyled isLight={isLight}>
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
    background: ${props => props.isLight ? '#000000' : '#ffffff' };
    padding: 30px;
    position: sticky;
    top: 0;
    z-index: 1;
`

export default Header;