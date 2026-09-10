"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface Milestone {
    year: string;
    title: string;
    description: string;
}

const milestones: Milestone[] = [
    {
        year: "1891",
        title: "Fundación",
        description:
            "Nace la Gran Logia del Estado Soberano e Independiente \"El Potosí\", marcando el inicio de nuestra historia",
    },
    {
        year: "1896",
        title: "Consolidación",
        description:
            "La institución promulgaría su independencia para trabajar y establecer relaciones con todos los cuerpo masónicos del mundo",
    },
    {
        year: "1907",
        title: "Fraternidad Histórica",
        description:
            "Un grupo de connotados intelectuales potosinos, entre los que se encontraban Antonio Díaz Soto y Gama, Juan Sarabia, Librado Rivera, encabezados por Camilo Arriaga y Ricardo Flores Magón, convocaron al Primer Congreso Liberal que tuvo lugar en el Teatro de La Paz.",
    },
    {
        year: "1929",
        title: "Un Hogar para todos",
        description:
            "La Gran Logia adquirió su edificio central, que se convertiría en sede permanente de sus trabajos en la capital potosina",
    },
    {
        year: "1991",
        title: "Centenario",
        description:
            "Celebramos cien años de tradición, fraternidad y servicio a la comunidad.",
    },
    {
        year: "2000-2010",
        title: "Trabajo Continuo",
        description:
            "Durante esta década la Gran Logia \"El Potosí\" mantuvo su estructura bajo la Confederación de Grandes Logias Regulares " +
            "de los Estados Unidos Mexicanos y la Confederación Masónica Interamericana.",
    },
    {
        year: "2026",
        title: "135 Aniversario",
        description:
            "Conmemoramos ciento treinta y cinco años de historia ininterrumpida. " +
            "A la fecha, la Gran Logia agrupa más de 45 logias simbólicas activas distribuidas en las cuatro regiones del estado: " +
            "Centro, Altiplano, Media y Huasteca",
    },
];

export default function
    AniversarioTimeline() {
    const trackRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start 85%", "end 55%"],
    });

    return (
        <section className="bg-[#0a0a0a] py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-20">
                    <span className="uppercase tracking-[0.3em] text-sm text-[#c8a76a]">
                        Nuestra historia
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase text-white leading-tight">
                        Línea del tiempo
                    </h2>

                    <div className="w-24 h-[2px] bg-[#c8a76a] mx-auto mt-8" />
                </div>

                <div ref={trackRef} className="relative">

                    {/* Línea base, siempre visible y tenue */}
                    <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

                    {/* Línea de progreso: se dibuja en directo, ligada al scroll */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#c8a76a] origin-top"
                    />

                    <div className="space-y-16">
                        {milestones.map((item, i) => (
                            <TimelineItem
                                key={item.year}
                                item={item}
                                index={i}
                                total={milestones.length}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({
                           item,
                           index,
                           total,
                           progress,
                       }: {
    item: Milestone;
    index: number;
    total: number;
    progress: MotionValue<number>;
}) {

    const start = index / total;
    const end = start + (1 / total) * 0.7;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [36, 0]);
    const dotScale = useTransform(progress, [start, start + (1 / total) * 0.35], [0, 1]);

    return (
        <div
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
        >
            {/* Punto */}
            <motion.span
                style={{ scale: dotScale }}
                className="absolute left-0 top-1.5 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#c8a76a] ring-4 ring-[#0a0a0a]"
            />

            {/* Contenido */}
            <motion.div
                style={{ opacity, y }}
                className={`pl-10 md:pl-0 md:w-1/2 ${
                    index % 2 === 1
                        ? "md:text-left md:pl-12"
                        : "md:text-right md:pr-12"
                }`}
            >
                <p className="text-2xl md:text-3xl font-[family-name:var(--font-cinzel)] text-[#c8a76a]">
                    {item.year}
                </p>

                <h3 className="mt-2 text-white text-lg md:text-xl uppercase tracking-wide">
                    {item.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                    {item.description}
                </p>
            </motion.div>

            {/* Espaciador (mitad opuesta en desktop) */}
            <div className="hidden md:block md:w-1/2" />
        </div>
    );
}
