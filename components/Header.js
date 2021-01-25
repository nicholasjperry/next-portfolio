import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';
import Navigation from 'components/Navigation';


function Header({ isDark, navigation }) {
    return (
        <HeaderStyled isDark={isDark, navigation}>
            <Box className="container">
                <Navigation navigation={navigation}/>
            </Box>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#efefef' };
    padding: 15px;

    /* .logo {
        color: #ffffff;
        font-weight: bold;
        font-size: ${rem(20)};
    } */
`

export default Header;