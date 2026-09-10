export default function NoticiasLoading() {
    return (
        <section className="min-h-screen bg-[#f5f5f3] py-24 px-6 md:px-12">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-16">

                    <h1 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl uppercase tracking-wide">
                        Noticias | Eventos
                    </h1>

                    <div className="w-32 h-[2px] bg-black mt-6" />
                </div>

                {/* Skeletons */}
                <div className="space-y-10">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 overflow-hidden animate-pulse"
                        >
                            <div className="grid md:grid-cols-[320px_1fr]">

                                {/* Imagen */}
                                <div className="h-[240px] md:h-full bg-gray-200" />

                                {/* Content */}
                                <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                                    <div className="h-3 w-32 bg-gray-200 rounded" />
                                    <div className="h-8 w-3/4 bg-gray-200 rounded" />
                                    <div className="space-y-2 mt-2">
                                        <div className="h-4 w-full bg-gray-200 rounded" />
                                        <div className="h-4 w-5/6 bg-gray-200 rounded" />
                                    </div>
                                    <div className="h-3 w-28 bg-gray-200 rounded mt-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
