import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <>
      <header className="flex shadow h-[15vh] max-h-[80px] px-4 justify-between items-center">
        <h1 className="uppercase">Clientes</h1>
        <ul className="flex items-center gap-2">
          <li>
            Fale conosco
          </li>
          <li>
            Sobre nós
          </li>
          <li>
            Trabalha conosco
          </li>
        </ul>
      </header>
      <main className="px-16 bg-slate-50 min-h-[85vh]">
      <Outlet />
      </main>
    </>
  );
}
