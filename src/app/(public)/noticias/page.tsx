import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/services/new.services";
import { formatDate } from '@/lib/date';

export default async function NoticiasPage() {

    const news = await getNews();

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

                {/* List */}
                <div className="space-y-10">

                    {news.map((item: any) => (

                        <Link
                            key={item.id}
                            href={`/noticias/${item.slug}`}
                            className="group block"
                        >
                            <article
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    overflow-hidden
                                    transition-all
                                    duration-500
                                    hover:shadow-2xl
                                    hover:-translate-y-1
                                "
                            >
                                <div className="grid md:grid-cols-[320px_1fr]">

                                    {/* Imagen */}
                                    <div className="relative h-[240px] md:h-full overflow-hidden">

                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${item.cover}`}
                                            alt={item.title}
                                            fill
                                            className="
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-105
                                            "
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 md:p-10 flex flex-col justify-center">

                                        {/* Fecha */}
                                        <span className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
                                             {formatDate(item.published_at)}
                                        </span>

                                        {/* Title */}
                                        <h2
                                            className="
                                                text-3xl
                                                md:text-4xl
                                                font-[family-name:var(--font-cinzel)]
                                                leading-tight
                                                mb-6
                                                transition-colors
                                                duration-300
                                                group-hover:text-yellow-700
                                            "
                                        >
                                            {item.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {item.excerpt}
                                        </p>

                                        {/* CTA */}
                                        <div className="mt-8">

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-3
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-sm
                                                    border-b
                                                    border-black
                                                    pb-1
                                                "
                                            >
                                                Leer noticia
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}