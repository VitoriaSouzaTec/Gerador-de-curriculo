import React, { useState, ChangeEvent, FormEvent } from 'react';

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Aqui você pode chamar a API para envio do e-mail de recuperação
    console.log('E-mail para recuperação enviado para:', email);
    setMensagem('Se o e-mail existir, enviaremos um link para redefinir sua senha.');
  };

  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-100 md:w-1/3 lg:w-1/4">
        <h1 className="text-3xl font-bold text-center mb-6">Recuperar Senha</h1>
        <p className="text-center mb-6 text-gray-600">
          Digite seu e-mail para receber instruções de redefinição de senha.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 w-full"
          >
            Enviar link de recuperação
          </button>
        </form>

        {mensagem && (
          <p className="text-green-600 text-sm mt-4 text-center">{mensagem}</p>
        )}

        <div className="mt-6 text-center">
          <a href="/login" className="text-blue-600 text-sm">
            Voltar para o login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
