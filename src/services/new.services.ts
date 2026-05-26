export async function getNews() {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return response.json();
}