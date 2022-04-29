import styled from '@emotion/styled';
import Navigation from 'components/Navigation';

function Header() {
    return (
        <HeaderStyled>
            <Navigation />
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    
    background: #000000;
    margin: 0;
    min-height: 135px;
    position: sticky;
    width: 100%;
`

export default Header;