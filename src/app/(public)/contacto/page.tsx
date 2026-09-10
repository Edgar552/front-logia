import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        'Ponte en contacto con la Gran Logia del Estado Soberano e Independiente "El Potosí". Resuelve tus dudas o solicita información sobre nuestra institución.',
};

export default function ContactPage() {
    return <ContactForm />;
}
