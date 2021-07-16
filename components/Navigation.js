import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import HeaderContext from '../contexts/HeaderContext';

function Navigation() {

    const router = useRouter();
    const { menuItems, color } = useContext(HeaderContext);
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <>
            <NavigationStyled color={color} isOpen={isOpen}>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <Link href={item.slug}>
                                <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>  
                            </Link>
                        </li>
                    ))}
                </ul>
            </NavigationStyled>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
        </>
    );
}

const NavigationStyled = styled.div`

    @media(max-width: 768px) {
        overflow: hidden;

        ul {
            display: flex;
            flex-direction: column;
            gap: 1vh;
            max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
            width: 100%;
            text-align: center;
            
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        float: right;

        li {
            margin-left: 50px;
            font-family: 'Inter', sans-serif;
            font-size: 1em;
            font-weight: 400;
            font-style: normal;
            
        }

        a {
            text-decoration: none;
            color: ${props => props.color ? '#7fffd4' : ' #000000'};

            &:hover {
                text-decoration: underline;
            }

            &.active {
                text-decoration: underline;
            }
        }
    }
`

const Hamburger = styled.div`
    display: none;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        cursor: pointer;

        span {
            height: 2px;
            width: 25px;
            background: #7fffd4;
            margin-bottom: 4px;
            border-radius: 5px;
        }
    }

`

export default Navigation;