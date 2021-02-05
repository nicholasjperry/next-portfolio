import { NextSeo } from 'next-seo';

function About() {
    const SEO = {
        title: "About Page",
        description: "Just your normal About Page :)",

        openGraph: {
            title: "About Page",
            description: "Just your normal About Page :)",
        }
    }

    return(
        <>
            <NextSeo {...SEO} />
            <h1>I'm an About Page</h1>
        </>
    );
}

export default About;