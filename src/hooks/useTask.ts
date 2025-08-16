import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask(){
    setTasks([ ...tasks, {
      id: Math.random().toString().substring(2, 9),
      title: "",
      state: 'creating',
    }])
  }

  function updateTask(id: string, payload: {title: Task["title"]}){
    setTasks( tasks.map((task) => task.id === id ? {...task, state: "created", ...payload}: task))
  }

  return {
    prepareTask,
    updateTask,
  }

}
