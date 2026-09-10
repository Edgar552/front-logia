"use client";

import { motion } from "framer-motion";

interface AniversarioRevealProps {
    children: React.ReactNode;
    delay?: number;
}

export default function AniversarioReveal({
                                               children,
                                               delay = 0,
                                           }: AniversarioRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 1.1,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
