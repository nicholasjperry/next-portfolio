import styled from '@emotion/styled';

function Card ({ project }) {

    const { API_URL } = process.env

    return (
        <CardStyled>
            <div className="poster">
                <img src={API_URL + project.media[0].url} alt="" />
            </div>
            <div className="body">
                <h3>{project.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.description}} />
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    margin-bottom: -50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);

    .body {
        padding: 10px;

        h3 {
            margin-bottom: 20px;
        }

        p {
            color: #666666;
            line-height: 1.5;
        }
    }
`

export default Card;