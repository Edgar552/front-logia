import type { Metadata } from "next";
import MuseoHero from "@/components/museo/MuseoHero";
import MuseoIntro from "@/components/museo/MuseoIntro";
import MuseoGallery from "@/components/museo/MuseoGallery";
import MuseoVisit from "@/components/museo/MuseoVisit";

export const metadata: Metadata = {
    title: "Museo Masónico",
    description:
        'Descubre el Museo Masónico de la Gran Logia "El Potosí": piezas, fotografías y documentos que resguardan la historia y el simbolismo de nuestra institución.',
};

export default function MuseoPage() {
    return (
        <>
            <MuseoHero />
            <MuseoIntro />
            <MuseoGallery />
            <MuseoVisit />
        </>
    );
}
