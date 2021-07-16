import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
    return (    
        <>
            <Global styles={css`
    
                body {
                    margin: 0;
                }
    
                h1 {
                    font-size: 3em;
                    margin: .67em 0;
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

