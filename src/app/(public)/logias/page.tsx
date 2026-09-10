import type { Metadata } from "next";
import UnderConstruction from "@/components/common/UnderConstruction";

// Página aún en construcción: se excluye de la indexación para no
// exponer contenido vacío en los resultados de búsqueda.
export const metadata: Metadata = {
    title: "Logias",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NosotrosPage() {
    return <UnderConstruction />;
}