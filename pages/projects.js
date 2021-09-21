import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Card from 'components/Card';
import fetch from 'isomorphic-unfetch';

function Projects({projects}) {
    return(
        <ProjectsStyled>
            <h1 style={{ textAlign: "center" }}>Projects</h1>
            <h2 style={{ textAlign: "center" }}>A List of My Projects</h2>
            <Box sx={{
                maxWidth: "1200px",
                mx: "auto",
                px: 3,
                mt: "50px",
                alignContent: "center"
            }}>
                <Flex justifyContent="space-between" flexDirection={{ _: "column", 1: "column", 2: "row" }}>
                    {projects.map(project => (
                        <Box key={project.id} width={{ _: "100%", 1: "100%", 2: "30%" }} className="card-container">
                            <Card project={project} />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </ProjectsStyled>
    );
}

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/projects`);
    const data = await res.json();

    return {
        props: {
            projects: data
        }
    }
}

const ProjectsStyled = styled.div `

    .card-container {
        @media only screen and (min-width: 768px) and (max-width: 1024px){
            width: 600px;
            margin: 0 auto;
        }
    }
`

export default Projects;