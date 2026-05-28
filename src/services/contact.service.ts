export async function sendContact(data: {
    nombre: string;
    telefono: string;
    email: string;
    mensaje: string;
}) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error("Error sending message");
    }

    return response.json();
}