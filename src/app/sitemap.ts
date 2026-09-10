import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getNews } from "@/services/new.services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/nosotros`, changeFrequency: "yearly", priority: 0.8 },
        { url: `${SITE_URL}/aniversario`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/museo`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/noticias`, changeFrequency: "weekly", priority: 0.7 },
        { url: `${SITE_URL}/contacto`, changeFrequency: "yearly", priority: 0.5 },
    ];

    // getNews() ya maneja errores internamente y devuelve [] si la API falla,
    // así que el sitemap nunca rompe la build por una falla de red.
    const news = await getNews();

    const newsRoutes: MetadataRoute.Sitemap = news
        .filter((item: any) => item?.slug)
        .map((item: any) => ({
            url: `${SITE_URL}/noticias/${item.slug}`,
            lastModified: item.published_at ? new Date(item.published_at) : undefined,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    return [...staticRoutes, ...newsRoutes];
}
