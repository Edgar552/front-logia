import MuseoHero from "@/components/museo/MuseoHero";
import MuseoIntro from "@/components/museo/MuseoIntro";
import MuseoGallery from "@/components/museo/MuseoGallery";
import MuseoVisit from "@/components/museo/MuseoVisit";

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
