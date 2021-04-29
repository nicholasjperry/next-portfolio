import fetch from 'isomorphic-unfetch';
import Card from 'components/Card';
import { Flex, Box } from 'reflexbox';

const Home = ({ projects }) => {

    console.log(projects)

    return (
        <Box variant="container">
            <Box sx={{ textDecoration: 'underline' }} my={20} as='h2'>Projects</Box>
            <Flex sx={{ gridGap: 5 }} flexDirection={{ _: 'column', 1: 'row', 2: 'row' }} mt={-20} mb={50}>
                {projects.map(project => (
                    <Box key={project.id} width={{ _: '100%', 2: '50%' }}>
                        <Card project={project}/>
                    </Box>
                ))}
            </Flex>
        </Box> 
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

export default Home;