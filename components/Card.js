import styled from '@emotion/styled';
import Link from 'next/link';

function Card ({ project }) {

    // const { API_URL } = process.env

    return (
        <CardStyled>
            <div className="poster">
                {/* <img src={project.media[0]} alt="" /> */}
            </div>
            <div className="body">
                <h2>{project.title}</h2>
                <h4>{project.caption}</h4>
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                    <a>Click to read more...</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color: #7fffd4;
    height: 250px;
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

        padding: 20px;

        h2 {
            text-decoration: underline;
        }

        a {
            text-decoration: none;
            color: #000000;
        }
    }
`

export default Card;