import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./pages/Sidebar";
import MeusChamados from "./pages/MeusChamados/MeusChamados"; 
import CentralDeChamados from "./pages/CentralDeChamados/CentralChamados"
import Configuracoes from "./pages/Configuracoes/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard" element={
            <div className="flex min-h-screen">
              <Sidebar />
              <Dashboard />
            </div>
          }
        />

        <Route
          path="/meuschamados" element={
            <div className="flex min-h-screen">
              <Sidebar />
              <MeusChamados />
            </div>
          }
        />

        <Route
          path="/centralChamados" element={
            <div className="flex min-h-screen">
              <Sidebar />
              <CentralDeChamados />
            </div>
          }
        />

        <Route
          path="/configuracoes" element={
            <div className="flex min-h-screen">
              <Sidebar />
              <Configuracoes />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;