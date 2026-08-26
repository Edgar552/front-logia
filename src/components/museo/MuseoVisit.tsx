import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInSection";

export default function MuseoVisit() {
    return (
        <FadeInSection>
            <section className="bg-[#f5f5f3] py-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">

                    <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
                        Agenda tu recorrido
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                        Visita nuestro museo
                    </h2>

                    <div className="w-24 h-[2px] bg-black mx-auto mt-8 mb-10" />

                    {/* TODO: agregar horarios, ubicación y detalles de la visita */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Conoce de cerca la historia y el simbolismo de nuestra
                        institución. Agenda tu visita o contáctanos para más información.
                    </p>

                    <Link href="/contacto">
                        <button className="mt-10 bg-black text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-800 transition duration-300 cursor-pointer">
                            Contáctanos
                        </button>
                    </Link>
                </div>
            </section>
        </FadeInSection>
    );
}
