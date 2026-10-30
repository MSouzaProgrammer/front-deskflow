import { LayoutDashboard, Ticket, Inbox, LucideSettings, LogOutIcon, Warehouse } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Sidebar() {
  return (
    <div className="border-r border-r-gray-600 w-65 h-screen">
      <div className="flex flex-col text-3xl font-extrabold font-mono text-center pt-5">
        <img src={logo} alt="DeskFlow" className="w-40 h-auto ml-10"/>
      </div>
      <p className="flex text-gray-600 text-xs pl-8 mt-5 font-bold">
        {" "}
        ÁREA DE TRABALHO{" "}
      </p>
      <div className="flex flex-col gap-3 mt-3 border border-gray-600  w-60 h-180 pt-5 ml-2 rounded-xl items-center">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg w-50 h-10 px-4 ml-1 font-semibold text-base border-l-4 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-100 text-blue-800 border-blue-700"
                  : "text-gray-600 border-transparent hover:bg-blue-50"
              }`
          }
        >
          <LayoutDashboard size={24} strokeWidth={2} />
          Dashboard
        </NavLink>

        <NavLink
          to="/meuschamados"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg w-50 h-10 px-4 ml-1 font-semibold text-base border-l-4 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-100 text-blue-800 border-blue-700"
                  : "text-gray-600 border-transparent hover:bg-blue-50"
              }`
          }
        >
          <Ticket size={24} strokeWidth={2} />
          Meus chamados
        </NavLink>

        <NavLink
          to="/centralChamados"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg w-50 h-10 px-4 ml-1 font-semibold text-base border-l-4 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-100 text-blue-800 border-blue-700"
                  : "text-gray-600 border-transparent hover:bg-blue-50"
              }`
          }
        >
          <Inbox size={24} strokeWidth={2} />
          Chamados
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg w-50 h-10 px-4 ml-1 font-semibold text-base border-l-4 transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-100 text-blue-800 border-blue-700"
                  : "text-gray-600 border-transparent hover:bg-blue-50"
              }`
          }
        >
          <LucideSettings size={24} strokeWidth={2} />
          Configurações
        </NavLink>
      </div>

      <footer className="text-gray-500 font-bold">
        <div className="flex mt-2 ml-5 gap-1">
          <div className="flex gap-2 border border-gray-300 w-50 h-10 pt-1 pl-1 rounded-lg bg-gray-100">
            <div className="border border-black w-8 h-8 rounded-2xl">
              <Warehouse size={24} strokeWidth={2} className="mt-0.5 ml-0.75"/>
            </div>
            <p className="pt-1">Almoxarifado</p>
          </div>
        </div>
        <div className="flex mt-2 ml-5 gap-1 border border-red-300 text-amber-50 bg-red-600 w-50 h-10 items-center justify-center rounded-md hover:bg-red-500">
          <button type="button" className="flex">
            <LogOutIcon size={24} strokeWidth={2}/>
            Sair
          </button>
        </div>
      </footer>
    </div>
  );
}
export default Sidebar;
