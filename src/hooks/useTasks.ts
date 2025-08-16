import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../domain/taskSchema";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
      const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
      const [tasks, setTasks] = useState<Task[]>([]);
      const [isLoadingTasks, setIsLoadingTasks] = useState(true);

      useEffect(() => {
            async function fetchTasks() {
                  if (isLoadingTasks) {
                        await delay(1000);
                        setIsLoadingTasks(false);
                  }
                  setTasks(tasksData);
            }

            fetchTasks();
      }, [isLoadingTasks, tasksData]);

      return {
            tasks,
            tasksCount: tasks.filter((task) => task.state === "created").length,
            concludedTasksCount: tasks.filter((task) => task.concluded).length,
            isLoadingTasks,
      }
}