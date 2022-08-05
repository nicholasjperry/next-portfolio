import { motion } from 'framer-motion';

const HeaderMotion = ({ children }) => {
    return(
        <motion.div
            animate={{ y: [-75, 0] }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

export default HeaderMotion;