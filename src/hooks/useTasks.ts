import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";

export default function useTasks() {
      const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
      return {
            tasks,
            tasksCount: tasks.length,
            concludedTasksCount: tasks.filter((task) => task.concluded).length
      }
}