import { ListChecks, PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";

interface Task {
  date: Date;
  title: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (newTask.length === 0) return;

    setTasks((old) => [
      ...old,
      {
        date: new Date(),
        title: newTask,
        done: false,
      },
    ]);
    setNewTask("");
  }

  function handleDeleteTask(taskDeleted: Task) {
    setTasks((old) => old.filter((current) => current !== taskDeleted));
  }

  function handleTaskChanged(taskChanged: Task, value: boolean) {
    setTasks((old) =>
      old.map((current) =>
        current === taskChanged ? { ...taskChanged, done: value } : current
      )
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col max-w-3xl gap-16 self-center w-full">
        <form
          className="flex mt-[-27px] w-full gap-2 items-center"
          onSubmit={handleAddTask}
        >
          <input
            className="bg-gray-500 text-base h-[54px] rounded-lg text-gray-100 placeholder-gray-300 p-4 w-full border-[1px] border-gray-700 focus:border-purple-700 focus:outline-none"
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => setNewTask(event.target.value)}
            value={newTask}
          />
          <button
            className="bg-blue-700 text-sm font-bold h-[52px] rounded-lg border-transparent text-gray-100 p-4 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-blue-700 focus:ring-transparent focus:bg-blue-500 flex flex-1 items-center gap-2"
            type="submit"
          >
            Criar
            <PlusCircle size={18} weight="bold" />
          </button>
        </form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-1 justify-between w-full">
            <span className="text-blue-500 font-bold text-sm">
              Tarefas criadas
              <span className="text-gray-200 font-bold text-xs bg-gray-400 rounded-full ml-2 px-2 py-1">
                {tasks.length}
              </span>
            </span>
            <span className="text-purple-500 font-bold text-sm">
              Concluídas
              <span className="text-gray-200 font-bold text-xs bg-gray-400 rounded-full ml-2 px-2 py-1">
                {tasks.filter((current) => current.done).length}
              </span>
            </span>
          </div>

          {tasks.length === 0 && (
            <div className="flex flex-1 flex-col items-center border-t-[1px] rounded-lg border-gray-400 py-16 text-[#3d3d3d]">
              <ListChecks size={56} className="mb-4" />
              <span className="text-gray-300 font-bold text-base">
                Você ainda não tem tarefas cadastradas
              </span>
              <span className="text-gray-300 text-base">
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          )}

          {tasks.map((task) => (
            <TodoItem
              title={task.title}
              checked={task.done}
              key={task.date.toISOString()}
              onDelete={() => handleDeleteTask(task)}
              onChange={(value) => handleTaskChanged(task, value)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
