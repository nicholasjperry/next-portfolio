import styled from '@emotion/styled';
import Link from 'next/link';

function Card ({ project }) {

    return (
        <CardStyled>
            <div className="body">
                <h3>{project.title}</h3>
                <h4>{project.caption}</h4>
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`} prefetch={false}>
                    <a>Click to read more...</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-image: 
        linear-gradient(90deg, #a6ffe1, #09ffac);
    height: 300px;
    width: 100%;
    border: 3px #cccccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    overflow: hidden;
    margin-bottom: 20px;

    .body {

        padding: 70px;

        h3 {
            text-decoration: underline;
        }

        a {
            text-decoration: none;
            color: #000000;
        }
    }
`

export default Card;