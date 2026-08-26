import FadeInSection from "@/components/animations/FadeInSection";

export default function MuseoIntro() {
    return (
        <FadeInSection>
            <section className="bg-[#f5f5f3] py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">

                    <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
                        Bienvenido
                    </span>

                    <h2 className="mt-6 text-3xl md:text-5xl font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                        Un espacio para preservar nuestra memoria
                    </h2>

                    <div className="w-24 h-[2px] bg-black mx-auto mt-8 mb-10" />

                    {/* TODO: reemplazar con la introducción real del museo */}
                    <p className="text-lg text-gray-700 leading-[2] text-justify">
                        El Museo Masónico de la Gran Logia "El Potosí" resguarda una
                        colección de objetos, documentos y símbolos que dan testimonio
                        del legado histórico y filosófico de nuestra institución.
                        Cada pieza cuenta una parte de la historia de la masonería
                        potosina y su contribución al desarrollo cultural y social
                        de la región.
                    </p>
                </div>
            </section>
        </FadeInSection>
    );
}
