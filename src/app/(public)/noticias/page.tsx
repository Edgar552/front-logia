import Image from "next/image";

export default function NoticiasPage() {
    return (
        <section className="min-h-screen bg-white text-black py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl uppercase mb-4">
                        Noticias
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Mantente informado sobre nuestros eventos y actividades.
                    </p>
                </div>

                {/* Featured News */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Imagen */}
                    <div className="relative w-full h-[800px] overflow-hidden rounded-lg">
                        <Image
                            src="/images/noticias/museo.jpg"
                            alt="Museo Paulino N. Guerrero"
                            fill
                            className="object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm uppercase tracking-widest text-yellow-700 font-semibold">
                            Evento Cultural
                        </span>

                        <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-5xl mt-4 mb-6 leading-tight">
                            Inauguración del Museo Paulino N. Guerrero
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            La historia, el arte y la memoria encuentran un nuevo hogar.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Tenemos el honor de invitarle a la inauguración del
                            Museo Paulino N. Guerrero, un espacio dedicado a preservar
                            y compartir el legado cultural que nos inspira.
                        </p>

                        <div className="space-y-3 text-gray-800">
                            <p>
                                <strong>Ubicación:</strong> Calle Manuel José Othón #335,
                                San Luis Potosí
                            </p>

                            <p>
                                <strong>Fecha:</strong> 18 de mayo de 2026
                            </p>

                            <p>
                                <strong>Hora:</strong> 19:00 hrs
                            </p>
                        </div>

                        <div className="mt-8 border-l-4 border-yellow-700 pl-5 italic text-gray-600">
                            Será un placer contar con su presencia en esta noche especial.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}