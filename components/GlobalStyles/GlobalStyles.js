import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
    return (    
        <>
            <Global styles={css`

                html {
                    box-sizing: border-box; 
                }
    
                body {
                    margin: 0 auto;
                    padding: 0;
                    width: 100%;
                    overflow-x: hidden;
                    font-family: 'Nova Mono', monospace;
                    background-color: #36454f;

                }
    
                h1 {
                    font-size: 4rem;
                    background-image: 
                        linear-gradient(90deg, #552586, #B589D6);
                    background-clip: text;
                    color: transparent;
                    margin-top: 0;
                }

                h3 {
                    color: white;
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

