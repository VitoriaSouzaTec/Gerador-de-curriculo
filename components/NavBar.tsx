'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import login from "../pages/login";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-zinc-800">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-50 w-50 object-contain mr-4"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden text-zinc-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Botão de ação */}

        <div className="hidden sm:flex">
          <Link href="/login">
          <Button variant="default">Entrar</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-zinc-700 hover:text-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full mt-2">Entrar</Button>
        </div>
      )}
    </nav>
  );
}
