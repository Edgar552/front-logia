import Link from "next/link";
import AniversarioReveal from "@/components/aniversario/AniversarioReveal";

export default function AniversarioClosing() {
    return (
        <AniversarioReveal>
            <section className="snap-start bg-black py-24 px-6 md:px-12 text-center">
                <div className="max-w-2xl mx-auto">

                    <p className="text-2xl md:text-3xl text-white font-[family-name:var(--font-cinzel)] leading-relaxed">
                        "El hombre es pasajero en el tiempo, pero sus actos
                        virtuosos permanecen eternos en la historia."
                    </p>

                    <div className="w-24 h-[2px] bg-[#c8a76a] mx-auto mt-10 mb-10" />

                    <Link href="/contacto">
                        <button
                            className="
                                border border-[#c8a76a] text-[#c8a76a]
                                px-8 py-3 text-sm tracking-widest uppercase
                                hover:bg-[#c8a76a] hover:text-black
                                transition duration-300 cursor-pointer
                            "
                        >
                            Forma parte de nuestra historia
                        </button>
                    </Link>
                </div>
            </section>
        </AniversarioReveal>
    );
}
