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
                cache: 'no-store',
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