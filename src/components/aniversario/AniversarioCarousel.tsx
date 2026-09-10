"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// TODO: reemplazar por las fotografías oficiales del 135 aniversario
const slides = [
    { image: "/images/museo/museo_inauguracion.jpg", caption: "Momento histórico" },
    { image: "/images/museo/museo_1.jpg", caption: "Legado potosino" },
    { image: "/images/about/logia-entrada.png", caption: "Nuestro templo" },
    { image: "/images/museo/museo_3.jpg", caption: "Memoria histórica" },
    { image: "/images/museo/museo_4.jpg", caption: "Hermandad internacional" },
];

export default function AniversarioCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef(false);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragScrollLeft = useRef(0);
    const [active, setActive] = useState(0);

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;

        const child = track.children[index] as HTMLElement | undefined;
        if (!child) return;

        track.scrollTo({
            left: child.offsetLeft - (track.clientWidth - child.clientWidth) / 2,
            behavior: "smooth",
        });
    }, []);

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            if (isHovering.current) return;

            setActive((prev) => {
                const next = (prev + 1) % slides.length;
                scrollToIndex(next);
                return next;
            });
        }, 4500);

        return () => clearInterval(interval);
    }, [scrollToIndex]);

    // Índice de la diapositiva más cercana al centro visible del track
    const getClosestIndex = useCallback(() => {
        const track = trackRef.current;
        if (!track) return 0;

        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;

        Array.from(track.children).forEach((child, i) => {
            const el = child as HTMLElement;
            const elCenter = el.offsetLeft + el.clientWidth / 2;
            const dist = Math.abs(center - elCenter);

            if (dist < closestDist) {
                closestDist = dist;
                closest = i;
            }
        });

        return closest;
    }, []);

    // Sincroniza el índice activo al hacer swipe/scroll manual
    const handleScroll = useCallback(() => {
        setActive(getClosestIndex());
    }, [getClosestIndex]);

    // Arrastre con el mouse (click sostenido), imitando el swipe táctil.
    // El touch nativo ya funciona por sí solo, así que se ignora aquí.
    const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === "touch") return;

        const track = trackRef.current;
        if (!track) return;

        isDragging.current = true;
        isHovering.current = true;
        dragStartX.current = e.clientX;
        dragScrollLeft.current = track.scrollLeft;

        // Desactiva el scroll-behavior "smooth" mientras se arrastra para
        // que el movimiento siga al puntero 1:1, sin retraso ni rebote.
        track.style.scrollBehavior = "auto";

        try {
            track.setPointerCapture(e.pointerId);
        } catch {
            // Algunos navegadores/dispositivos pueden rechazar la captura;
            // el arrastre sigue funcionando igual mientras el puntero no
            // salga del track.
        }
    }, []);

    const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;

        const track = trackRef.current;
        if (!track) return;

        const delta = e.clientX - dragStartX.current;
        track.scrollLeft = dragScrollLeft.current - delta;
    }, []);

    const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;

        isDragging.current = false;
        isHovering.current = false;

        const track = trackRef.current;
        if (!track) return;

        track.style.scrollBehavior = "";

        try {
            if (track.hasPointerCapture(e.pointerId)) {
                track.releasePointerCapture(e.pointerId);
            }
        } catch {
            // Sin captura activa, no hay nada que liberar.
        }

        // Al soltar, encaja suavemente en la diapositiva más cercana,
        // con la misma fluidez que usan las flechas.
        const closest = getClosestIndex();
        setActive(closest);
        scrollToIndex(closest);
    }, [getClosestIndex, scrollToIndex]);

    return (
        <div
            className="relative"
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
        >
            {/* Track */}
            <div
                ref={trackRef}
                onScroll={handleScroll}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onPointerCancel={endDrag}
                onDragStart={(e) => e.preventDefault()}
                className="
                    no-scrollbar
                    flex gap-6
                    overflow-x-auto
                    snap-x snap-mandatory
                    scroll-smooth
                    select-none
                    cursor-grab active:cursor-grabbing
                    px-[10%] sm:px-[15%] md:px-[22%]
                    pb-4
                "
            >
                {slides.map((slide, i) => (
                    <div
                        key={slide.image + i}
                        className={`
                            relative
                            shrink-0
                            snap-center
                            w-[80%] sm:w-[70%] md:w-[56%]
                            h-[300px] md:h-[440px]
                            overflow-hidden
                            transition-all duration-500
                            ${i === active ? "opacity-100 scale-100" : "opacity-40 scale-90"}
                        `}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.caption}
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white text-lg font-[family-name:var(--font-cinzel)] uppercase tracking-wide">
                                {slide.caption}
                            </p>
                        </div>

                        <div className="absolute inset-0 border border-[#c8a76a]/0 hover:border-[#c8a76a]/50 transition duration-500" />
                    </div>
                ))}
            </div>

            {/* Flechas */}
            <button
                type="button"
                aria-label="Anterior"
                onClick={() => scrollToIndex((active - 1 + slides.length) % slides.length)}
                className="
                    hidden md:flex
                    absolute left-2 top-1/2 -translate-y-1/2
                    items-center justify-center
                    w-12 h-12 rounded-full
                    bg-black/60 text-white border border-white/20
                    hover:bg-[#c8a76a] hover:text-black
                    transition cursor-pointer
                "
            >
                <ChevronLeft size={22} />
            </button>

            <button
                type="button"
                aria-label="Siguiente"
                onClick={() => scrollToIndex((active + 1) % slides.length)}
                className="
                    hidden md:flex
                    absolute right-2 top-1/2 -translate-y-1/2
                    items-center justify-center
                    w-12 h-12 rounded-full
                    bg-black/60 text-white border border-white/20
                    hover:bg-[#c8a76a] hover:text-black
                    transition cursor-pointer
                "
            >
                <ChevronRight size={22} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {slides.map((_, i) => (
                    <button
                        type="button"
                        key={i}
                        aria-label={`Ir a la diapositiva ${i + 1}`}
                        onClick={() => scrollToIndex(i)}
                        className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                            i === active ? "w-8 bg-[#c8a76a]" : "w-3 bg-white/30 hover:bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
