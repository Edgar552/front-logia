import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_SHORT_NAME,
        description: SITE_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#c8a76a",
        icons: [
            {
                src: "/images/logo-white.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
