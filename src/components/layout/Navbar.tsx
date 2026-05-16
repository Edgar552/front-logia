"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "INICIO", href: "/" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "NOTICIAS", href: "/noticias" },
    { name: "LOGIAS", href: "/logias" },
    { name: "CONTACTO", href: "/contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop + Mobile Navbar */}
            <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo-white.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="w-16 md:w-24 h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-white text-1xl xl:text-1xl lg:text-1xl tracking-wider font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-yellow-400 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile button */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={30} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-black z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800">
                    <h2 className="text-white text-lg font-semibold tracking-widest">

                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col mt-10 px-8 gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-xl font-medium tracking-wider border-b border-gray-800 pb-3 hover:text-yellow-400 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-10 left-8 right-8 text-center text-gray-400 text-sm">
                    Gran Logia "El Potosí"
                </div>
            </div>
        </>
    );
}