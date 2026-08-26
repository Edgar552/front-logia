export default function MuseoHero() {
    return (
        <section
            className="h-[70vh] min-h-[520px] bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/museo/museo_cta.png')",
            }}
        >
            <div className="text-center text-white z-10 px-6">

                <span className="uppercase tracking-[0.35em] text-sm text-gray-300">
                    Patrimonio • Historia • Simbolismo
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                    Museo Masónico
                </h1>

                <h4 className="mt-2 text-2xl md:text-4xl xl:text-5xl font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                  Paulino N. Guerrero
                </h4>

                <div className="w-32 h-[2px] bg-[#c8a76a] mx-auto mt-8" />

                <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
                    Un recorrido por los objetos, símbolos y documentos
                    que narran la historia de nuestra institución.
                </p>
            </div>

            <div className="absolute inset-0 bg-black/50" />
        </section>
    );
}
