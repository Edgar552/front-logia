import Link from 'next/link'

export default function HeroSection() {

    return (
        <section
            className="h-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
            }}>

            <div className="text-center text-white z-10">
                <h1 className="text-4xl xl:text-6xl lg:text-4xl  font-bold uppercase">
                    Gran Logia de Estado
                </h1>

                <h2 className="text-3xl xl:text-6xl lg:text-4xl  font-bold uppercase mt-2">
                    Soberana e Independiente
                </h2>

                <p className="text-4xl xl:text-6xl lg:text-4xl  mt-4 text-gray-300">
                    "EL POTOSI"
                </p>

                <Link href="/contacto">
                    <button  className="mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition cursor-pointer">
                        <p className="xl:text-2xl"> Forma parte de Nosotros...</p>
                    </button>
                </Link>
            </div>

            <div className="absolute inset-0 bg-black/40" />
        </section>
    );
}