import { useState } from "react";
import api from "../scripts/api";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  async function handleLogin() {
    try {
      setCarregando(true);
      setErro("");

      const resposta = await api<{ token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      });

      localStorage.setItem("token", resposta.token);

      console.log("Login realizado com sucesso!");
    } catch (error) {
      setErro(
        error instanceof Error ? error.message : "Erro ao realizar login.",
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Fundo com gradiente e curvas */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute h-full w-full"
        >
          <defs>
            <linearGradient
              id="meuGradiente"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <radialGradient id="brilhoAzul">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </radialGradient>
          </defs>

          {/* Brilho azul no canto superior */}
          <circle
            cx="0"
            cy="0"
            r="450"
            fill="url(#brilhoAzul)"
            fillOpacity="0.5"
          />

          {/* Área com gradiente na parte inferior */}
          <path
            d="M 0 500 L 0 350 C 200 250, 500 650, 1000 200 L 1000 500 Z"
            fill="url(#meuGradiente)"
            fillOpacity="0.2"
          />

          {/* Curva azul */}
          <path
            d="M 0 400 C 200 200, 500 600, 1000 100"
            stroke="#93C5FD"
            strokeWidth="2"
            fill="none"
          />

          {/* Segunda curva */}
          <path
            d="M 0 450 C 250 250, 600 650, 1000 150"
            stroke="#BFDBFE"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Card de login */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-mist-400 bg-white/90 p-8 shadow-xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">DeskFlow</h1>

          <p className="mt-2 text-sm text-gray-500">
            Entre na sua conta para continuar
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Senha
            </label>

            <div className="relative">
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Digite sua senha"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-blue-600"
                aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
              >
                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            onClick={handleLogin}
            disabled={carregando}
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Sistema de gerenciamento de chamados
        </p>
      </div>
    </div>
  );
}
export default Login;
