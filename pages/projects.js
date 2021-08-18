import { Flex, Box } from 'reflexbox';
import Card from 'components/Card';
import fetch from 'isomorphic-unfetch';

function Projects({projects}) {
    return(
        <Box variant="container">
            <h1 style={{ textAlign: "center" }}>Projects</h1>
            <h3 style={{ textAlign: "center", fontStyle: "italic" }}>A List of My Projects</h3>
            <Box sx={{
                maxWidth: "1200px",
                mx: "auto",
                px: 3,
                mt: "50px",
                alignContent: "center"
            }}>
                <Flex justifyContent="space-between" flexDirection={{ _: "column", 1: "row", 2: "row" }}>
                    {projects.map(project => (
                        <Box key={project.id} width={{ _: "100%", 1: "30%" }}>
                            <Card project={project} />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
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

export default Projects;