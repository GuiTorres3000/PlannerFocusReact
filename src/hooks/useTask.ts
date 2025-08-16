import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";

export default function useTask() {
  const [task, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask(){
    setTasks([ ...task, {
      id: Math.random().toString().substring(2, 9),
      title: "",
      state: 'creating',
    }])
  }

  return {
    prepareTask,
  }

}
