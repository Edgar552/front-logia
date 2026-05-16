import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 text-center">
            <Image
                src="/images/logo-aniv.png"
                alt="Footer Logo"
                width={120}
                height={120}
                className="mx-auto mb-6"
                priority
                unoptimized
            />

            <p className="text-lg">
                © Gran Logia "El Potosí" Todos los derechos reservados
            </p>
        </footer>
    );
}