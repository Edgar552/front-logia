"use client";

import { useEffect } from "react";

// Activa un scroll con snap suave (proximity) y desplazamiento suavizado
// únicamente mientras la página del 135 Aniversario está montada.
export default function AniversarioScrollScope() {
    useEffect(() => {
        const html = document.documentElement;
        html.classList.add("snap-y", "snap-proximity", "scroll-smooth");

        return () => {
            html.classList.remove("snap-y", "snap-proximity", "scroll-smooth");
        };
    }, []);

    return null;
}
