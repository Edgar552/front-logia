import FadeInSection from "@/components/animations/FadeInSection";

export default function ObjectiveSection() {
    return (
        <FadeInSection>
            <section
                className="py-28 px-10 bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/images/caverna.png')",
                }}>
                <div className="max-w-5xl ml-auto bg-black/60 p-10 text-white relative z-10">
                    <h2 className="text-4xl text-center xl:text-right font-bold uppercase mb-6">
                        Nuestro Objetivo
                    </h2>

                    <p className="text-lg text-justify xl:text-3xl leading-relaxed">
                        Trabajamos constantemente por el perfeccionamiento moral,
                        intelectual y espiritual del ser humano, promoviendo principios éticos que contribuyan al bienestar de la sociedad.
                        Desarrollar virtudes como honestidad, tolerancia, justicia y responsabilidad, a su vez
                        impulsar el estudio de filosofía, simbolismo, historia y pensamiento crítico.
                    </p>
                </div>

                <div className="absolute inset-0 bg-black/30" />
            </section>
        </FadeInSection>
    );
}