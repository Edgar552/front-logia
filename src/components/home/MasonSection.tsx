import Image from "next/image";
import FadeInSection from "@/components/animations/FadeInSection";
import Link from "next/link";

export default function MasonSection() {
    return (
        <FadeInSection>
            <section className="bg-white py-10">

            {/* Bloque superior: imagen + cita */}
            <div className="max-w-10xl mx-auto px-6 md:px-12 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Imagen izquierda */}
                    <div className="relative">
                        <Image
                            src="/images/chronos_bg.jpg"
                            alt="Masonería"
                            width={900}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                            unoptimized
                        />
                    </div>

                    {/* Cita derecha */}
                    <div className="flex flex-col items-center justify-center text-center">

                        <div className="text-gray-400 text-8xl leading-none self-start md:ml-10">
                            <p className="text-9xl">“</p>
                        </div>

                        <p className="text-3xl md:text-4xl text-gray-800 leading-relaxed max-w-xl">
                            El hombre es pasajero en el tiempo, pero sus actos
                            virtuosos permanecen eternos en la historia.
                        </p>

                        <div className="text-gray-400 text-8xl leading-none self-end md:mr-10">
                            <p className="text-9xl">”</p>

                        </div>

                        <Link href="/nosotros">
                            <button className="mt-8 bg-black text-white px-8 py-3
                                    text-sm tracking-widest uppercase
                                    hover:bg-gray-800 transition duration-300 cursor-pointer">
                                <p className="xl:text-2xl tex-lg"> Leer más ...</p>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            {/* Bloque inferior: texto + estatua */}
            <div className="max-w-7xl mx-auto px-3 md:px-6mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Texto */}
                    <div>
                        <h2 className="text-2xl text-center xl:text-3xl xl:text-left md:text-5xl font-bold uppercase mb-8 text-black">
                            ¿Qué representa el masón?
                        </h2>

                        <p className="text-2xl text-justify xl:text-2xl text-gray-700 leading-relaxed">
                            Ser masón es emprender un viaje de transformación
                            personal y servicio a la humanidad. Más que un título,
                            es un compromiso con la virtud, la fraternidad y la
                            búsqueda constante de la verdad.
                        </p>

                        <p className="text-2xl text-justify xl:text-2xl  text-gray-700 leading-relaxed mt-6">
                            La Masonería te invita a tallar tu propia piedra bruta,
                            a superar tus límites y construir un mundo más justo
                            con las herramientas de la sabiduría, la fortaleza y la belleza.
                        </p>

                        <p className="text-2xl text-justify xl:text-2xl  text-gray-700 leading-relaxed mt-6">
                            Aqui no encontrarás respuestas dogmáticas, sino la libertad de cuestionar,
                            crecer y trascender junto a hermanos que comparten tu mismo anhelo de progreso
                            ¿Estás listo para encender tu luz interior y ser parte de algo más grande que tu mismo?
                        </p>
                    </div>

                    {/* Imagen estatua */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/marmol.png"
                            alt="Estatua Mason"
                            width={500}
                            height={700}
                            className="object-contain"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
        </FadeInSection>
    );
}