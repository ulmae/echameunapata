import { Facebook, HandCoins, MessageCircleMore } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--dark) text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4 bg-white py-2 px-4 rounded-full overflow-clip">
          <Image
            src="/logo.jpg"
            alt="Échame una pata logo"
            width={128}
            height={96}
          />
        </div>

        {/* Social links */}

        <div className="flex gap-6 items-center flex-col md:flex-row">
          <Link href="/donaciones" className="flex items-center gap-2 hover:text-(--info) transition-colors">
            <HandCoins className="w-5 h-5" />
            <span>Donaciones</span>

          </Link>
          <a
            href="https://www.facebook.com/echameunapatasv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-(--info) transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          <a
            href="https://wa.me/50379291589"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-(--info) transition-colors"
          >
            <MessageCircleMore className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>


      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 mt-6 text-center md:text-right">
        © {new Date().getFullYear()} Échame una pata SV. Todos los derechos reservados. <br /><span className="text-[0.75rem]">Desarrollo web por <a href="https://www.linkedin.com/in/ulmae/" target="_blank">Ulma Escobar</a></span>
      </div>
    </footer>
  );
}
