import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <form className="flex max-w-3xl mt-[-27px] mx-4 w-full gap-2 items-center">
          <input
            className="bg-gray-500 text-base h-[54px] rounded-lg text-gray-100 placeholder-gray-300 p-4 w-full border-[1px] border-gray-700 focus:border-purple-700 focus:outline-none"
            placeholder="Adicione uma nova tarefa"
          />
          <button className="bg-blue-700 text-sm font-bold h-[52px] rounded-lg border-transparent text-gray-100 p-4 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-700 focus:ring-transparent focus:bg-blue-500 flex flex-1 items-center gap-2">
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </main>
    </div>
  );
}
