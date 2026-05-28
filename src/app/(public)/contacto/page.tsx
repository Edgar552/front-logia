"use client";

import { useState } from "react";
import {sendContact} from "@/services/contact.service";
import Swal from "sweetalert2";
export default function ContactPage() {
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

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (loading) return;

        try {

            setLoading(true);

            await sendContact(formData);

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
    return (
        <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12" style={{backgroundImage: "url('/images/athenas.jpg')"}}>
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl uppercase mb-4">
                        Contacto
                    </h1>

                    <p className="text-gray-300 text-lg">
                        Ponte en contacto con nosotros para resolver tus dudas.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-lg space-y-8"
                >
                    {/* Nombre */}
                    <div>
                        <label className="block mb-3 text-sm tracking-widest uppercase text-gray-300">
                            Nombre
                        </label>

                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ingresa tu nombre"
                            className="w-full bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block mb-3 text-sm tracking-widest uppercase text-gray-300">
                            Teléfono
                        </label>

                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ingresa tu teléfono"
                            className="w-full bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>


                    <div>
                        <label className="block mb-3 text-sm tracking-widest uppercase text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Ingresa tu Email"
                            className="w-full bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block mb-3 text-sm tracking-widest uppercase text-gray-300">
                            Mensaje
                        </label>

                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Escribe cual es tu inter&eacute;s y/o duda sobre la Gran Logia El Potosi"
                            rows={6}
                            className="w-full bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-yellow-500 transition resize-none"
                            required
                        />
                    </div>

                    {/* Button */}
                    <div className="text-center">
                        <button  disabled={loading}
                            type="submit"
                            className="border
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
        </section>
    );
}