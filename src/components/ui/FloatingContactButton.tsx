"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function FloatingContactButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button  onClick={() => setOpen((prev) => !prev)}
                aria-label="Contacto"
                className="fixed
                          bottom-6
                          right-6
                          z-[9999]
                          w-16
                          h-16
                          rounded-full
                          bg-[#c8a76a]
                          text-black
                          shadow-2xl
                          hover:scale-110
                          transition-all
                          duration-300
                          flex
                          items-center
                          justify-center">

                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">

                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h8M8 14h4m7 7l-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-1l3 3z"
                    />
                </svg>
            </button>

            {open && (
                <ContactModal
                    open={open}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}