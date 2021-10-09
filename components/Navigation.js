import styled from '@emotion/styled';
import { Box } from 'reflexbox';
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
                <Box className="nav">
                    <Link href="/"><a>NP</a></Link>
                </Box>
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
            flex-wrap: wrap;
            max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
            text-align: center;
            justify-content: center;
        }
        li {
            flex-basis: 50%;
        }
    }
    .nav {
        display: inline-block;
        transform: translate(0%, 70%);
        background-image: linear-gradient(to left, #d47fff, #552586);
        a {
            font-size: 30px;
            width: 40px;
            height: 35px;
            border: 5px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            &:hover {
                background-size: 0%;
            }
            @media(max-width: 768px) {
                display: none;
            }
        }
    }
    ul {
        padding: 0;
        margin: 0 auto;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center; 
        gap: 6vw;
        text-align: center;
        width: 100%;
    }
    li {
        font-family: 'Nova Mono', monospace;
        font-size: 1.15em;
        font-weight: 400;
        font-style: normal;
    }
    a {
        /* styling for active nav link */
        background-image:
            linear-gradient(90deg, #d47fff, #7fffd4);
        background-size: 0% 3px;
        background-repeat: no-repeat;
        background-position: left bottom;
        transition: background-size 350ms ease;
        /* extra styling */
        text-decoration: none;
        color: #7fffd4;
        &:hover {
            background-size: 100% 3px;
        }
        &.active {
            background-image:
                linear-gradient(90deg, #d47fff, #7fffd4);
            background-size: 100% 3px;
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