import Image from "next/image";
import {formatDate} from "@/lib/date";

async function getNewsDetail(slug: string) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("News not found");
    }

    return response.json();
}

export default async function NewsDetailPage({
                                                 params,
                                             }: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    const news = await getNewsDetail(slug);

    return (
        <section className="min-h-screen bg-white text-black py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl uppercase mb-4">
                        Noticias
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Mantente informado sobre nuestros eventos y actividades.
                    </p>
                </div>

                {/* Featured News */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Imagen */}
                    <div className="relative w-full h-[800px] overflow-hidden rounded-lg">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${news.cover}`}
                            alt={news.title}
                            fill
                            className="object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm uppercase tracking-widest text-yellow-700 font-semibold">
                            Evento
                        </span>

                        <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-5xl mt-4 mb-6 leading-tight">
                            {news.title}
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6"

                           dangerouslySetInnerHTML={{
                               __html: news.content,
                           }}
                        >

                        </p>

                        {news.event_place && (
                        <div className="space-y-3 text-gray-800">
                            <p>
                                <strong>Ubicación:</strong> {news.event_place}
                            </p>

                            <p>
                                <strong>Fecha:</strong> {formatDate(news.event_date)}

                            </p>

                            <p>
                                <strong>Hora:</strong> {(news.event_time)}
                            </p>

                            <div className="mt-8 border-l-4 border-yellow-700 pl-5 italic text-gray-600">
                                Será un placer contar con su presencia en esta noche especial.
                            </div>

                        </div>

                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}