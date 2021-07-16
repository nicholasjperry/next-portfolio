import styled from '@emotion/styled';
import Link from 'next/link';

function Card ({ project }) {

    // const { API_URL } = process.env

    return (
        <CardStyled>
            <div className="poster">
                <img src={project.media[0]} alt="" />
            </div>
            <div className="body">
                <h3>{project.title}</h3>
                {/* <p dangerouslySetInnerHTML={{ __html: project.description}} /> */}

                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                    <a>Click to read more...</a>
                </Link>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background-color: #7fffd4;
    padding: 30px;
    height: 100%;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);

    .body {

        p {
            color: #666666;
        }
        a {
            display: inline-block;
            text-decoration: none;
            color: #000000;
        }
    }
`

export default Card;