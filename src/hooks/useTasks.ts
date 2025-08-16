import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";

export default function useTasks() {
      const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
      return {
            tasks,
            tasksCount: tasks.filter((task) => task.state === "created").length,
            concludedTasksCount: tasks.filter((task) => task.concluded).length
      }
}