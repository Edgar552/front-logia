"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AniversarioLegado() {
    return (
        <section className="bg-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Contenido */}
                <motion.div
                    className="order-2 lg:order-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fade}
                >
                    <span className="uppercase tracking-[0.3em] text-sm text-[#c8a76a]">
                        Mirando al futuro
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase text-black leading-tight">
                        El legado que continúa
                    </h2>

                    <div className="w-24 h-[2px] bg-[#c8a76a] mt-8 mb-10" />

                    <div className="space-y-6 text-gray-700 leading-[1.9] text-lg">
                        <p className="text-justify">
                            Cada generación de hermanos ha dejado su huella en la
                            historia de nuestra Gran Logia, sumando esfuerzos para
                            que la fraternidad, el estudio y la virtud sigan
                            iluminando el camino de quienes vendrán después.
                        </p>

                        <p className="text-justify">
                            Hoy renovamos ese compromiso: honrar 135 años de
                            tradición trabajando para que las próximas generaciones
                            encuentren en esta institución un espacio de
                            crecimiento, hermandad y propósito.
                        </p>
                    </div>

                    <blockquote className="mt-10 border-l-2 border-[#c8a76a] pl-6 text-gray-600 italic">
                        "Lo que construimos hoy, será la herencia de mañana."
                    </blockquote>
                </motion.div>

                {/* Imagen con marco */}
                <motion.div
                    className="relative order-1 lg:order-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fade}
                >
                    <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#c8a76a]/40 hidden md:block" />

                    <div className="relative h-[380px] md:h-[520px] overflow-hidden">
                        <Image
                            src="/images/about/logia_slp_v2.png"
                            alt="Legado y futuro"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
