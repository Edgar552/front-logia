// import UnderConstruction from "@/components/common/UnderConstruction";
import Image from "next/image";

export default function NosotrosPage() {
    // return <UnderConstruction />;

    return (
        <section className="bg-[#f5f5f3] overflow-hidden">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">

                <div className="text-center py-10">

                    <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
                        Institución • Tradición • Fraternidad
                    </span>

                    <h2 className="mt-6 text-5xl md:text-7xl leading-tight uppercase font-[family-name:var(--font-cinzel)]">
                        Nosotros
                    </h2>

                    <div className="w-32 h-[2px] bg-black mx-auto mt-8" />

                    <p className="mt-10 max-w-4xl mx-auto text-lg leading-[2]text-gray-700 text-justify">
                        La Gran Logia del Estado Soberano e Independiente
                        “El Potosí” representa una tradición filosófica,
                        moral y humanista dedicada al perfeccionamiento
                        del individuo y al servicio de la sociedad.
                        Nuestra institución promueve la fraternidad,
                        la libertad de pensamiento y la búsqueda
                        constante de la verdad como pilares
                        fundamentales del desarrollo humano.
                    </p>
                </div>
            </div>

            {/* SECTION 1 */}
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    grid
                    lg:grid-cols-2
                    gap-16
                    items-center
                    mb-32
                "
            >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                    <Image
                        src="/images/about/logia_slp.png"
                        alt="Gran Logia"
                        width={900}
                        height={1200}
                        className="w-full h-[650px] object-cover transition-transform duration-700 hover:scale-105"/>


                    <div className="absolute bottom-10 left-10 text-white">

                        <span className="tracking-[0.3em] uppercase text-sm">
                            Desde 1891
                        </span>

                        <h3 className="mt-4 text-4xl md:text-5xl font-[family-name:var(--font-cinzel)]">
                            Tradición y Legado
                        </h3>
                    </div>
                </div>

                {/* CONTENT */}
                <div>

                    <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
                        Nuestra Historia
                    </span>

                    <h3 className="mt-6 text-4xl md:text-5xl leading-tight font-[family-name:var(--font-cinzel)]">
                        Una institución construida sobre principios eternos
                    </h3>

                    <div className="w-24 h-[2px] bg-black mt-8 mb-10" />

                    <div className="space-y-8text-gray-700 leading-[2] text-lg">

                        <p className="text-justify">
                            En San Luis Potosí, la Masonería se remonta a las primeras cofradías que  llegaron a estas tierras
                            procedentes del viejo continente europeo, encerrando hacia el interior de su organización
                            los secretos de las Logias de aquel lugar que ya para el año de 1500 buscaban los secretos de la alquimia
                            y el simbolismo antiguo. Se establecieron en suelo Potosino; Ligas, Hansas, Logias y Cofradías;
                            y con ellas las reuniones de estudio, conservando esos secretos del trabajo especializado que solo los
                            iniciados podían conocer.
                            Los primeros mineros y cantereros solo permitían la entrada a sus agrupaciones a quienes formaban parte de la familia;
                            su huella la dejaron plasmada en el simbolismo que decoran los Templos y viejos edificios;
                            verdaderos  joyas arquitectónicas que majestuosas se hiergen en diversos sitios del territorio potosino.
                        </p>

                        <br/>

                        <p className="text-justify">
                            La masonería ha sido históricamente un espacio
                            dedicado al desarrollo intelectual, moral y espiritual
                            del ser humano. Nuestra Gran Logia continúa
                            preservando ese legado mediante el estudio,
                            la reflexión y el fortalecimiento de los valores
                            universales de fraternidad y justicia.
                        </p>

                        <p className="text-justify">
                            A través de nuestras logias y miembros,
                            impulsamos proyectos de carácter social,
                            cultural y educativo que buscan contribuir
                            positivamente al bienestar colectivo y al
                            progreso de nuestra comunidad.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className="bg-black text-white py-24">

                <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">

                    {/* CONTENT */}
                    <div>

                        <span className="uppercase tracking-[0.3em] text-gray-400 text-sm">
                            Filosofía
                        </span>

                        <h3
                            className="mt-6 text-4xl md:text-5xl leading-tight font-[family-name:var(--font-cinzel)]">
                            El conocimiento como camino hacia la luz
                        </h3>

                        <div className="w-24 h-[2px] bg-[#c8a76a] mt-8 mb-10" />

                        <div
                            className="space-y-8 text-gray-300 leading-[2] text-lg">
                            <p className="text-justify">
                                Nuestra doctrina promueve la libertad
                                de conciencia, el respeto mutuo y la
                                constante superación personal mediante
                                el estudio de las ciencias, las artes
                                y la filosofía.
                            </p>

                            <p className="text-justify">
                                Cada miembro es invitado a construir
                                una mejor versión de sí mismo y a
                                proyectar ese crecimiento en beneficio
                                de la humanidad y de las generaciones futuras.
                            </p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="relative overflow-hidden">

                        <Image
                            src="/images/about/logia-entrada.png"
                            alt="Templo San Luis Potosi"
                            width={900}
                            height={1200}
                            className="
                                w-full
                                h-[650px]
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                            "
                        />
                    </div>
                </div>
            </div>

        </section>
    );

}