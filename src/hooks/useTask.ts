import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([...tasks, {
      id: Math.random().toString().substring(2, 9),
      title: "",
      state: 'creating',
    }])
  }

  function updateTask(id: string, payload: Partial<Task>) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...payload } : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return {
    prepareTask,
    updateTask,
    deleteTask,
  }
}
