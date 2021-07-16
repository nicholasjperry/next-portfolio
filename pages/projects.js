import styled from '@emotion/styled';
import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';
import { Flex, Box } from 'reflexbox';

function Projects( {projects} ) {
    return(
        <ProjectsStyled>
            <h1>My Projects</h1>
            <Box>
                <Flex className="projects-flex" flexDirection={{ _: 'column', 1: 'column', 2: 'row', 3: 'row' }}>
                    {projects.map(project => (
                        <Box key={project.id} width={{ _: '100%', 2: '50%' }}>
                            <Card project={project}/>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </ProjectsStyled>
    );
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/projects`)
    const data = await res.json()

    return {
        props: {
            projects: data
        }
    }
}

const ProjectsStyled = styled.div `
    h1 {
        text-align: center;
    }
    .projects-flex {
        text-align: center;
        grid-gap: 200px;
        margin: 150px;
    }
`

export default Projects;