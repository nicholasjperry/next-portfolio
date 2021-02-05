import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';
import Navigation from 'components/Navigation';
import ToggleNavigationColorButton from 'components/ToggleNavigationColorButton';


function Header({ isDark }) {
    return (
        <HeaderStyled isDark={isDark}>
            <Box className="container">
                <Flex>
                    <Navigation />
                    <Box sx={{ marginLeft: "auto" }}>
                        <ToggleNavigationColorButton />
                    </Box>
                </Flex>
                
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