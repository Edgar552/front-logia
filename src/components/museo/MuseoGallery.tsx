import Image from "next/image";
import FadeInSection from "@/components/animations/FadeInSection";

const pieces = [
    {
        title: "Inauguración",
        image: "/images/museo/museo_inauguracion.jpg",
        description: "Momento Histórico para nuestra logia.",
    },
    {
        title: "Símbolos Antiguos",
        image: "/images/museo/museo_2.jpg",
        description: "Patrimonio y legado potosino",
    },
    {
        title: "Fotografías Históricas",
        image: "/images/museo/museo_3.jpg",
        description: "Imágenes del pasado con impacto a nuestro presente",
    },
    {
        title: "Objetos Internacionales",
        image: "/images/museo/museo_4.jpg",
        description: "Historia compartida de nuestros hermanos del mundo.",
    },

    {
        title: "Legado Potosino",
        image: "/images/museo/museo_1.jpg",
        description: "Trascendencia en la historia potosina",
    },
    {
        title: "Masoneria y Más...",
        image: "/images/museo/museo_5.jpg",
        description: "Conoce más de nosotros con tu visita",
    },
];

export default function MuseoGallery() {
    return (
        <FadeInSection>
            <section className="bg-black py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">

                        <span className="uppercase tracking-[0.3em] text-sm text-gray-400">
                            Galería
                        </span>

                        <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase text-white leading-tight">
                            Nuestro Museo
                        </h2>

                        <div className="w-24 h-[2px] bg-[#c8a76a] mx-auto mt-8" />
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pieces.map((piece) => (
                            <div
                                key={piece.title}
                                className="relative h-[380px] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={piece.image}
                                    alt={piece.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">

                                    <h3 className="text-white text-xl font-[family-name:var(--font-cinzel)] uppercase tracking-wide">
                                        {piece.title}
                                    </h3>

                                    <p
                                        className="
                                            text-gray-300
                                            text-sm
                                            mt-2
                                            max-h-0
                                            opacity-0
                                            overflow-hidden
                                            transition-all
                                            duration-500
                                            group-hover:max-h-20
                                            group-hover:opacity-100
                                        "
                                    >
                                        {piece.description}
                                    </p>
                                </div>

                                {/* Border on hover */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-[#c8a76a]/60 transition duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
}
