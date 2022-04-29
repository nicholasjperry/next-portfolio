import { motion } from "framer-motion";

export default function AboutTextAnimation() {
    const line1 = "A hard-working individual with an unmatched ability to solve problems, both cooperatively and individually. ";
    const line2 = "I am seeking a position where I can illuminate these assets by virtue of synthesizing and deploying ";
    const line3 = "practical, user-friendly, and efficient software applications."; 

    const line = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return(
        <motion.p
            className="typed-out"
            variants={line}
            initial="hidden"
            animate="visible"
        >
            {line1.split("").map((char, index) => {
                return(
                    <motion.span key={char + index} variants={letter}>{char}</motion.span>
                );
            })}
            {line2.split("").map((char, index) => {
                return(
                    <motion.span key={char + index} variants={letter}>{char}</motion.span>
                );
            })}
            {line3.split("").map((char, index) => {
                return(
                    <motion.span key={char + index} variants={letter}>{char}</motion.span>
                );
            })}
        </motion.p>
    );
}