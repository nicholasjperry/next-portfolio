import { Flex, Box } from 'reflexbox';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechnologiesUsed = ({technologies}) => {
    
    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start( {opacity: 1 }, {duration: 0.5} );
        }
        if (!inView) {
            animation.start({opacity: 0})
        }
    }, [inView]);

    return(
        <motion.div ref={ref} animate={animation}>
            <Box sx={{
                    maxWidth: 1600,
                    mx: "auto",
                    px: 3
                }} 
            >
                <Flex justifyContent="center" alignItems="center" flexDirection={{ _: "column", 1: "column", 2: "row", 3: "row", 4: "row" }} mt={60} sx={{ gap: 80}}>
                    {technologies && technologies.map(technology => {
                        return(
                            <Box key={technology.id} width={{ _:"20%" }}>
                                <Image src={technology.avatar.name} width={270} height={175} />
                            </Box>
                        );
                    })}
                </Flex>
            </Box>
        </motion.div>
    );
}

export default TechnologiesUsed;