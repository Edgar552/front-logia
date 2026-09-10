import Image from "next/image";

export default function AniversarioHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

            {/* Glow ambiental */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,167,106,0.25),transparent_60%)]" />

            {/* Numeral gigante decorativo */}
            <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            >
                <span
                    className="
                        text-[clamp(7rem,26vw,18rem)]
                        font-[family-name:var(--font-cinzel)]
                        font-bold
                        leading-none
                        bg-gradient-to-b from-[#c8a76a] via-[#8a723f] to-transparent
                        bg-clip-text text-transparent
                        opacity-40
                    "
                >
                    135
                </span>
            </div>

            <div className="relative z-10 text-center text-white px-6">

                <Image
                    src="/images/logo-aniv.png"
                    alt="135 Aniversario"
                    width={140}
                    height={140}
                    className="mx-auto mb-8 w-24 md:w-32 h-auto"
                    priority
                />

                <span className="uppercase tracking-[0.4em] text-sm text-[#c8a76a]">
                    1891 — 2026
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl xl:text-7xl font-[family-name:var(--font-cinzel)] uppercase leading-tight">
                    Aniversario 135
                </h1>

                <div className="w-32 h-[2px] bg-[#c8a76a] mx-auto mt-8" />

                <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
                    Ciento treinta y cinco años de tradición, fraternidad
                    y compromiso con la luz del conocimiento.
                </p>
            </div>
        </section>
    );
}
