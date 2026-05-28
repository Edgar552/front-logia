"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { sendContact } from "@/services/contact.service";

export default function ContactWelcomeModal() {

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
    });

    useEffect(() => {

        const lastSeen = localStorage.getItem("welcome_contact_modal");
        const now = Date.now();

        const Days = 2 * 24 * 60 * 60 * 1000;

        if (!lastSeen || now - Number(lastSeen) > Days) {

            const timer = setTimeout(() => {

                setOpen(true);

                localStorage.setItem(
                    "welcome_contact_modal",
                    now.toString()
                );

            }, 1200);

            return () => clearTimeout(timer);
        }

    }, []);

    useEffect(() => {

        document.body.style.overflow = open ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [open]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (loading) return;

        try {

            setLoading(true);

            await sendContact(formData);

            setOpen(false);

            await Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje correctamente.",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#c8a76a",
                background: "#111111",
                color: "#ffffff",
            });

            setFormData({
                nombre: "",
                telefono: "",
                email: "",
                mensaje: "",
            });

        } catch (error) {

            await Swal.fire({
                icon: "error",
                title: "No fue posible enviar el mensaje",
                text: "Ocurrió un problema al intentar enviar tu solicitud. Por favor intenta nuevamente más tarde.",
                confirmButtonText: "Entendido",
                confirmButtonColor: "#c8a76a",
                background: "#111111",
                color: "#ffffff",
            });

        } finally {

            setLoading(false);
        }
    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="relative w-full max-w-2xl bg-[#111111]
                    border
                    border-white/10
                    rounded-2xl
                    overflow-y-auto
                    shadow-2xl
                    animate-in
                    fade-in
                    zoom-in-95
                    duration-200">

                {/* Close */}
                <button
                    onClick={handleClose}
                    className="
                        absolute
                        top-4
                        right-4
                        text-white/70
                        hover:text-white
                        transition
                        z-20
                    "
                >
                    ✕
                </button>

                {/* Background */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/athenas.jpg')",
                    }}
                />

                <div className="relative z-10 p-8 md:p-10 text-white">

                    {/* Header */}
                    <div className="text-center mb-8">

                        <h2 className="
                            font-[family-name:var(--font-cinzel)]
                            text-3xl
                            md:text-5xl
                            uppercase
                            mb-4
                        ">
                            Contacto
                        </h2>

                        <p className="text-gray-300">
                            Ponte en contacto con nosotros para resolver tus dudas.
                        </p>

                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Nombre */}
                        <div>

                            <label className="
                                block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300
                            ">
                                Nombre
                            </label>

                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre"
                                className="
                                    w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                "
                                required
                            />

                        </div>

                        {/* Telefono */}
                        <div>

                            <label className="
                                block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300
                            ">
                                Teléfono
                            </label>

                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Ingresa tu teléfono"
                                className="
                                    w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                "
                                required
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="
                                block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300
                            ">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ingresa tu Email"
                                className="
                                    w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                "
                                required
                            />

                        </div>

                        {/* Mensaje */}
                        <div>

                            <label className="
                                block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300
                            ">
                                Mensaje
                            </label>

                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Escribe cual es tu interés y/o duda sobre la Gran Logia El Potosi"
                                rows={5}
                                className="
                                    w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                    resize-none
                                "
                                required
                            />

                        </div>

                        {/* Button */}
                        <div className="pt-2">

                            <button
                                disabled={loading}
                                type="submit"
                                className="
                                    w-full
                                    border
                                    border-white
                                    px-10
                                    py-3
                                    uppercase
                                    tracking-widest
                                    transition
                                    duration-300

                                    hover:bg-white
                                    hover:text-black

                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                    disabled:hover:bg-transparent
                                    disabled:hover:text-white
                                "
                            >
                                {loading ? "Enviando..." : "Enviar mensaje"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}