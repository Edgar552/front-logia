"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);

        alert("Formulario enviado (solo frontend por ahora)");
    };

    return (
        <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
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

                    {/* Mensaje */}
                    <div>
                        <label className="block mb-3 text-sm tracking-widest uppercase text-gray-300">
                            Mensaje
                        </label>

                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            placeholder="Escribe tu mensaje"
                            rows={6}
                            className="w-full bg-transparent border border-gray-600 px-4 py-3 focus:outline-none focus:border-yellow-500 transition resize-none"
                            required
                        />
                    </div>

                    {/* Button */}
                    <div className="text-center">
                        <button disabled
                            type="submit"
                            className="border border-white px-10 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
                        >
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}