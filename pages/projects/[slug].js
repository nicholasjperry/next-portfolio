import { Box, Flex } from 'reflexbox';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';

function Project({ project }) {
    
    console.log(project);

    const SEO = {
        title: `Portfolio Website | ${project.title}`,
        description: project.description,

        openGraph: {
            title: `Portfolio Website | ${project.title}`,
            description: project.title,
        }
    }

    return(
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" style={{ margin: "1em" }} my={40}>{project.title}</Box>
                <Box maxWidth={600}>
                    <p style={{ color: "white", margin: "1em" }} dangerouslySetInnerHTML={{ __html: project.description }}></p>
                </Box>
            </Box>
        </>
    );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {

    const { slug } = context.query;
    const res = await fetch(`${publicRuntimeConfig.API_URL}/projects?slug=${slug}`);
    const data = await res.json();

    console.log(slug);

    return {
        props: {
            project: data[0]
        },
    }
}

export default Project;