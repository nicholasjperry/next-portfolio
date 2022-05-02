import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Link from 'next/link'
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';

function Project({ project }) {

    const SEO = {
        title: `nicholasjperry.com | ${project.title}`,
        description: project.description,

        openGraph: {
            title: `nicholasjperry.com | ${project.title}`,
            description: project.title,
        }
    }

    const linkText = "-->View Code on Github<--"

    return(
        <ProjectStyled>
            <Box className="background">
                <NextSeo {...SEO} />
                <Box 
                    className="project-container"
                    sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    alignContent: "center"
                    }} 
                >
                    <Box as="h1" className="project-title">{project.title}</Box>
                    <Flex 
                        flexDirection={{ _: "column", 1: "column", 2: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        alignContent="center" 
                        sx={{ marginTop: 50, marginBottom: 300, gridGap: 4 }} 
                    >
                        <Box className="text-container" width={{ _: "100%", 1: "100%", 2: "55%", }}>
                            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                        </Box>
                        <Flex 
                            flexDirection={{ _: "column" }}
                            justifyContent="center"
                            alignContent="center"
                            alignItems="left"
                        >
                            <Box>
                                <video controls muted>
                                    <source src={project.media[0].name} />
                                </video>
                            </Box>
                            <Box className="link-container" width={{ _: "100%", 1: "100%", 2: "120%" }}>
                                <Link href={project.link}>
                                    <a className="project-link" target="_blank" rel="noreferrer noopener">{linkText}</a>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </ProjectStyled>
    );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
    
    const { slug } = context.query;
    const res = await fetch(`${publicRuntimeConfig.API_URL}/projects?slug=${slug}`);
    const data = await res.json();

    return {
        props: {
            project: data[0]
        },
    }
}

const ProjectStyled = styled.div`

    @keyframes sky-move {
        from {background-position: 0 0;}
        to {background-position: -100000px 100000px;}
    }

    .background {
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
        background-image: url('/images/stars.png');
        animation: sky-move 12000s infinite;
    }

    .project-container {
        text-align: center;
        margin-top: 2em;
    }

    .project-title {
        font-size: 4em;
    }

    .link-container {
        text-align: center;
        margin-top: 20px;
        padding: 5px;

        a {
            color: #fff;
            font-size: 35px;
        }
    }

    .text-container {
        text-align: center;
        border-image-source: linear-gradient(to left, #d47fff, #7fffd4);
        border-width: 4px;
        border-image-slice: 1;
        padding: 0.5rem;
        box-shadow: 0 0 20px rgba(0,0,0, 0.1);
        color: #7fffd4;
        font-size: 30px;
        margin: 1rem;
    }

    video {
        width: 600px;

        @media only screen and (min-width: 360px) and (max-width: 768px) {
            width: 495px;
        }
        @media only screen and (min-width: 915px) {
            width: 700px;
        }
    }
`

export default Project;