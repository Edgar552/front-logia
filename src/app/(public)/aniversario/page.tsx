import type { Metadata } from "next";
import AniversarioScrollScope from "@/components/aniversario/AniversarioScrollScope";
import AniversarioHero from "@/components/aniversario/AniversarioHero";
import AniversarioStory from "@/components/aniversario/AniversarioStory";
import AniversarioTimeline from "@/components/aniversario/AniversarioTimeline";
import AniversarioLegado from "@/components/aniversario/AniversarioLegado";
import AniversarioGallery from "@/components/aniversario/AniversarioGallery";
import AniversarioClosing from "@/components/aniversario/AniversarioClosing";

export const metadata: Metadata = {
    title: "135 Aniversario",
    description:
        'Conmemoramos 135 años de historia de la Gran Logia del Estado Soberano e Independiente "El Potosí", fundada en 1891. Conoce nuestra línea del tiempo y legado.',
};

export default function AniversarioPage() {
    return (
        <>
            <AniversarioScrollScope />
            <AniversarioHero />
            <AniversarioGallery />
            <AniversarioStory />
            <AniversarioTimeline />
            <AniversarioLegado />
            {/*<AniversarioClosing />*/}
        </>
    );
}
