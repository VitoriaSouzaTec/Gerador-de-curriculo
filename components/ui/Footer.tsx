import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Inscrito com o e-mail: ${email}`);
  };

  return (
    <footer className="bg-gray-800 text-white py-8 font-geist">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Logo à esquerda */}
        <div className="flex items-center space-x-4">
          <img src="/logoFooter.png" alt="Logo" className="h-50 w-50 hidden sm:block" />
        </div>

        {/* Newsletter centralizada */}
        <div className="w-full max-w-md text-center">
          <h3 className="text-lg font-semibold">Inscreva-se na nossa Newsletter</h3>
          <p className="text-sm mt-2">Receba as últimas novidades diretamente no seu e-mail.</p>
          <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="px-4 py-2 rounded-lg text-white bg-gray-700 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
            >
              Inscrever
            </button>
          </form>
        </div>

        {/* Páginas importantes e políticas à direita */}
        <div className="text-sm text-center md:text-left">
          <h4 className="font-semibold">Páginas Importantes</h4>
          <ul>
            <li><a href="/servicos" className="text-blue-400 hover:underline">Serviços</a></li>
            <li><a href="/sobre" className="text-blue-400 hover:underline">Sobre Nós</a></li>
            <li><a href="/contato" className="text-blue-400 hover:underline">Contato</a></li>
            <li><a href="/blog" className="text-blue-400 hover:underline">Blog</a></li>
          </ul>

          <h4 className="font-semibold mt-4">Políticas</h4>
          <ul>
            <li><a href="/termos" className="text-blue-400 hover:underline">Termos de Serviço</a></li>
            <li><a href="/privacidade" className="text-blue-400 hover:underline">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 Feito por Vitória Souza. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
