export default function HeroSection() {
    return (
        <section
            className="h-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
            }}
        >
            <div className="text-center text-white z-10">
                <h1 className="text-4xl xl:text-6xl lg:text-4xl  font-bold uppercase">
                    Gran Logia de Estado
                </h1>

                <h2 className="text-3xl xl:text-6xl lg:text-4xl  font-bold uppercase mt-2">
                    Soberano e Independiente
                </h2>

                <p className="text-4xl xl:text-6xl lg:text-4xl  mt-4 text-gray-300">
                    "EL POTOSI"
                </p>

                <button className="mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
                   <p className="xl:text-2xl"> Conoce Nuestra Historia...</p>
                </button>
            </div>

            <div className="absolute inset-0 bg-black/40" />
        </section>
    );
}