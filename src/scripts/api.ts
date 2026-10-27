const API_URL = "http://localhost:8080";

async function api<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("token");

  const headers = new Headers(options.headers);

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const texto = await response.text();

  const dados = texto ? JSON.parse(texto) : null;

  if (!response.ok) {
    throw new Error(
      dados?.message || dados?.error || `Erro HTTP ${response.status}`,
    );
  }

  return dados as T;
}

export default api;
