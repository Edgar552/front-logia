export interface NewsItem {
    id: number;
    title: string;
    content?: string;
    image?: string;
    created_at?: string;
}

export async function getNews(): Promise<NewsItem[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
            throw new Error(
                'NEXT_PUBLIC_API_URL is not defined'
            );
        }

        const controller = new AbortController();

        const timeout = setTimeout(() => {
            controller.abort();
        }, 10000);

        const response = await fetch(
            `${apiUrl}/news`,
            {
                method: 'GET',
                // Se cachea y revalida cada 60s en vez de "no-store": así la
                // ruta /noticias deja de ser 100% dinámica y el navegador
                // puede reutilizar la página ya cargada al volver a entrar
                // (sin repetir el fetch ni mostrar el skeleton otra vez).
                next: { revalidate: 60 },
                signal: controller.signal,
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        clearTimeout(timeout);

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const contentType =
            response.headers.get('content-type');

        if (
            !contentType?.includes(
                'application/json'
            )
        ) {
            throw new Error(
                'Invalid JSON response'
            );
        }

        return await response.json();
    } catch (error) {
        console.error(
            '[NEWS_FETCH_ERROR]',
            error
        );

        return [];
    }
}