import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar"
import { ImProfile } from "react-icons/im";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "@/components/Footer";
import Link from "next/link";
import Cadastro from "./cadastro";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>  
    <NavBar/>
    <main className="min-h-screen bg-white px-4 py-10 sm:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          Crie um currículo <br /> moderno e <br /> personalizado
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Transforme seu perfil profissional com nossos currículos intuitivos e fáceis de usar.
        </p>

        <Link href="/cadastro">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
        Começar agora
        </button>
        </Link>

        
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        <div>
          <div className="flex justify-center mb-4">
            <ImProfile className = "text-6xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fácil personalização</h3>
          <p className="text-gray-600">
            Adapte seu currículo conforme suas necessidades com simplicidade.
          </p>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <CiClock2 className="text-6xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Economize tempo</h3>
          <p className="text-gray-600">
            Crie currículos profissionais em minutos, sem complicações.
          </p>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <MdOutlineFileDownload  className="text-6xl"/>
          </div>
          <h3 className="text-xl font-semibold mb-2">Exportação simplificada</h3>
          <p className="text-gray-600">
            Baixe seu currículo em PDF com apenas um clique.
          </p>
        </div>
      </section>
    </main>
    <Footer/>
  
    </>
  
  );
}
