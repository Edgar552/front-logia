"use client";

import {useState } from "react";
import Swal from "sweetalert2";
import { sendContact } from "@/services/contact.service";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}
export default function ContactModal({open,onClose}: ContactModalProps){

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (loading) return;

        try {

            setLoading(true);

            await sendContact(formData);

            onClose();

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

        <div  className="
            fixed
            z-[9999]

            bottom-24
            left-4
            right-4

            md:left-auto
            md:right-6
            md:bottom-24

            md:w-[420px]

            animate-in
            fade-in
            slide-in-from-bottom-5
            duration-300">

            <div className="
                    bg-[#111111]
                    rounded-3xl
                    shadow-2xl
                    overflow-hidden

                    h-auto

                    max-h-[70vh]
                    md:max-h-[700px]

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
                        z-20">
                    X
                </button>

                {/* Background */}
                {/*<div*/}
                {/*    className="absolute inset-0 opacity-20 bg-cover bg-center"*/}
                {/*    style={{*/}
                {/*        backgroundImage: "url('/images/athenas.jpg')",*/}
                {/*    }}*/}
                {/*/>*/}

                <div className="
                        relative
                        z-10

                        overflow-y-auto

                        max-h-[70vh]
                        md:max-h-[700px]

                        p-5
                        md:p-8

                        text-white">

                    {/* Header */}
                    <div className="text-center mb-8">

                        <h2 className="font-[family-name:var(--font-cinzel)]
                            text-xl
                            md:text-2xl
                            uppercase
                            mb-4">
                            Contacto
                        </h2>

                        {/*<p className="text-gray-300">*/}
                        {/*    Ponte en contacto con nosotros para resolver tus dudas.*/}
                        {/*</p>*/}

                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}
                        className="space-y-6">

                        {/* Nombre */}
                        <div>

                            <label className="block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300">
                                Nombre
                            </label>

                            <input type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre"
                                className="w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition" required/>

                        </div>

                        {/* Telefono */}
                        <div>
                            <label className="block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300">Teléfono
                            </label>

                            <input type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Ingresa tu teléfono"
                                className="w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition" required/>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300">
                                Email
                            </label>

                            <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ingresa tu Email"
                                className="w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                "required/>
                        </div>

                        {/* Mensaje */}
                        <div>

                            <label className="block
                                mb-3
                                text-sm
                                tracking-widest
                                uppercase
                                text-gray-300">
                                Mensaje
                            </label>

                            <textarea name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Escribe cual es tu interés y/o duda sobre la Gran Logia El Potosi"
                                rows={3}
                                className="w-full
                                    bg-transparent
                                    border
                                    border-gray-600
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:border-yellow-500
                                    transition
                                    resize-none" required/>

                        </div>

                        {/* Button */}
                        <div className="pt-2">

                            <button disabled={loading}
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
                                    disabled:hover:text-white">
                                {loading ? "Enviando..." : "Enviar mensaje"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}