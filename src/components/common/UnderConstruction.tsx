import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";

export default function UnderConstruction() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">

                <div className="flex justify-center mb-8">
                    <Hammer size={70} className="text-yellow-500" />
                </div>

                <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl uppercase mb-6">
                    Sitio en construcción
                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                    Estamos trabajando para habilitar esta sección próximamente.
                    Gracias por tu paciencia.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300"
                >
                    <ArrowLeft size={18} />
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
}