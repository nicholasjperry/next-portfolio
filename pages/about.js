import { NextSeo } from 'next-seo';
import { Box } from 'reflexbox';
import fetch from 'isomorphic-unfetch';

function About({page}) {
    const SEO = {
        title: page.Title,
        description: "Just your normal About Page :)",

        openGraph: {
            title: page.Title,
            description: "Just your normal About Page :)",
        }
    }

    return(
        <>
            <NextSeo {...SEO} />
            <Box variant="container">
                <Box as="h2" my={40}>{page.Title}</Box>
                <div dangerouslySetInnerHTML={{ __html: page.Content }} />
            </Box>
        </>
    );
}

export async function getStaticProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/pages/1`)
    const data = await res.json()

    return {
        props: {
            page: data
        },
        revalidate: 1
    }
}

export default About;