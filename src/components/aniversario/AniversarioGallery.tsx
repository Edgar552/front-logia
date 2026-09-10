"use client";

import { motion } from "framer-motion";
import AniversarioCarousel from "@/components/aniversario/AniversarioCarousel";

const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AniversarioGallery() {
    return (
        <section className="bg-[#0a0a0a] py-24 overflow-hidden">

            <motion.div
                className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeDown}
            >
                <span className="uppercase tracking-[0.3em] text-sm text-[#c8a76a]">
                    Momentos
                </span>

                <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase text-white leading-tight">
                    135 años en imágenes
                </h2>

                <div className="w-24 h-[2px] bg-[#c8a76a] mx-auto mt-8" />
            </motion.div>

            <AniversarioCarousel />
        </section>
    );
}
