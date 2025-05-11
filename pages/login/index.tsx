export default function Login() {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-100 md:w-1/3 lg:w-1/4">
        <h1 className="text-4xl font-bold text-center mb-6">Entrar</h1>
        <p className="text-center mb-6">
          Não tem uma conta?{' '}
          <a href="/cadastro" className="text-blue-600">Cadastre-se</a>
        </p>

        <form>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="/recuperar-senha" className="text-blue-600 text-sm">
              Esqueceu sua senha?
            </a>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 w-full"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
