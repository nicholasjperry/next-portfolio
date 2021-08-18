import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
    return (    
        <>
            <Global styles={css`
    
                body {
                    margin: 0 auto;
                    overflow-x: hidden;
                    /* height: 100%; */
                }
    
                h1 {
                    font-size: 3em;
                    margin: .67em 0;
                    background-image: 
                        linear-gradient(90deg, #552586, #B589D6);
                    background-clip: text;
                    color: transparent;
                    font-weight: 900;
                }
    
                html {
                    box-sizing: border-box; 
                    font-family: sans-serif;
                }
    
                *,
                *::before,
                *::after {
                    border-width: 0;
                    border-style: solid;
                    border-color: currentColor;
                }
            `}/>
        </>
    );
}

