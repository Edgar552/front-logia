import Image from "next/image";
import AniversarioReveal from "@/components/aniversario/AniversarioReveal";

const stats = [
    { value: "135", label: "Años de historia" },
    { value: "1891", label: "Año de fundación" },
    { value: "∞", label: "Generaciones de hermanos" },
];

export default function AniversarioStory() {
    return (
        <AniversarioReveal>
            <section className="bg-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Imagen con marco */}
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-full h-full border border-[#c8a76a]/40 hidden md:block" />

                        <div className="relative h-[380px] md:h-[520px] overflow-hidden">
                            <Image
                                src="/images/aniversario/aniversario.jpg"
                                alt="135 Aniversario"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Contenido */}
                    <div>
                        <span className="uppercase tracking-[0.3em] text-sm text-[#c8a76a]">
                            Una fecha que nos une
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase text-black leading-tight">
                            135 años construyendo fraternidad
                        </h2>

                        <div className="w-24 h-[2px] bg-[#c8a76a] mt-8 mb-10" />

                        <div className="space-y-6 text-gray-700 leading-[1.9] text-lg">
                            <p className="text-justify">
                                En 2026, la Gran Logia del Estado Soberano e Independiente
                                "El Potosí" conmemora ciento treinta y cinco años de historia
                                ininterrumpida, un legado forjado por generaciones de hermanos
                                comprometidos con el estudio, la virtud y el servicio a la sociedad.
                            </p>

                            <p className="text-justify">
                                Este aniversario es una celebración de nuestra tradición y, al
                                mismo tiempo, una reafirmación del compromiso con las nuevas
                                generaciones que continuarán escribiendo esta historia.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-black/10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center md:text-left">
                                    <p className="text-3xl md:text-4xl font-[family-name:var(--font-cinzel)] text-[#c8a76a]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </AniversarioReveal>
    );
}
