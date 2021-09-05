import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
    return (    
        <>
            <Global styles={css`

                html {
                    box-sizing: border-box; 
                    position: fixed;
                    overflow: auto;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #36454f;
                }
    
                body {
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                    overflow-x: hidden;
                    margin: 0 auto;
                    padding: 0;
                    font-family: 'Nova Mono', monospace;
                }
    
                h1 {
                    font-size: 4rem;
                    background-image: 
                        linear-gradient(90deg, #552586, #B589D6);
                    background-clip: text;
                    color: transparent;
                    /* margin-top: 0; */
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

