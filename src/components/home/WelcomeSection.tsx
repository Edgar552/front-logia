import Image from "next/image";
import FadeInSection from "@/components/animations/FadeInSection";
const cards = [
    {
        title: "VALORES",
        image: "/images/valores_m.jpg",
        description:
            "Promovemos principios de fraternidad, respeto, justicia y crecimiento espiritual para construir una sociedad más consciente.",
    },
    {
        title: "FRATERNIDAD",
        image: "/images/fraternidad.jpg",
        description:
            "La unión entre hermanos fortalece nuestros ideales y fomenta el apoyo mutuo dentro y fuera de la institución.",
    },
    {
        title: "CONOCIMIENTO",
        image: "/images/conocimiento.jpg",
        description:
            "Buscamos el desarrollo intelectual y moral mediante el estudio, la reflexión y el perfeccionamiento constante.",
    },
];

export default function WelcomeSection() {
    return (
        <FadeInSection>
            <section className="bg-gray-100 py-5 px-6 md:px-12">
            <div className="max-w-10xl mx-auto">

                <div>
                    <Image
                        src="/images/mason-dark.png"
                        alt="mason-logo"
                        width={120}
                        height={120}
                        className="mx-auto mb-6"
                        priority
                        unoptimized
                    />
                </div>

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl xl:text-4xl font-bold uppercase text-black">
                        Bienvenido al sitio oficial
                    </h2>

                    <p className="text-xl xl:text-2xl text-gray-600 mt-4">
                        Gran Logia "El Potosí"
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="relative h-[450px] overflow-hidden group cursor-pointer"
                        >
                            {/* Imagen */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center px-8 text-center">
                                <p className="text-white text-xl leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* Franja inferior fija */}
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 py-5 px-4 text-center">
                                <h3 className="text-white text-xl font-semibold tracking-wider uppercase">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </FadeInSection>
    );
}