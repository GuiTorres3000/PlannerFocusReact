
import Card from "../atoms/Card/Card";
import Container from "../atoms/Container/Container";
import InputCheckbox from "../atoms/InputCheckbox/InputCheckbox";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import { FaTrash, FaPencilAlt, FaUndo, FaCheck } from "react-icons/fa";
import { useState } from "react";
import InputText from "../atoms/InputText/InputText";
import type { Task } from "../../domain/taskSchema";
import { cx } from "class-variance-authority";
import useTask from "../../hooks/useTask";
import Skeleton from "../atoms/Skeleton/Skeleton";

interface TaskItemProps {
      loading?: boolean,
      task: Task;
}

export default function TaskItem({ loading, task }: TaskItemProps) {

      const [isEditing, setIsEditing] = useState(
            task?.state === "creating"
      );

      const [taskTitle, setTaskTitle] = useState(task.title || "");
      const { updateTask, deleteTask } = useTask();

      function handleEditModeTask() {
            if(isEditing){
                  if(task.state === "creating") return deleteTask(task.id);
            }
            setIsEditing(!isEditing)
      }

      function handleSaveTask(e: React.FormEvent<HTMLDivElement>) {
            e.preventDefault(); // Não sair da página
            updateTask(task.id, { title: taskTitle, state: "created" })
            setIsEditing(false);
      }

      function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
            setTaskTitle(e.target.value || "");
      }

      function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
            const checked = e.target.checked;
            updateTask(task.id, { concluded: checked })

      }
      function handleDeleteTask() {
            deleteTask(task.id);     
      }


      return (
            <Card size="md">
                  {isEditing ?
                        <>
                              <Container as="form" onSubmit={handleSaveTask} className="flex items-center gap-3">
                                    <InputText value={taskTitle}  className="flex-1" 
                                    onChange={handleChangeTaskTitle} required autoFocus />
                                    <Container as="div" className="flex gap-1">
                                          <Button type="button" variant="icon_secondary" size="icon" onClick={handleEditModeTask}><FaUndo /></Button>
                                          <Button type="submit" variant="icon_primary" size="icon"><FaCheck /></Button>
                                    </Container>
                              </Container>
                        </>
                        :
                        <>
                              <Container as="div" className="flex items-center gap-3">
                                    <InputCheckbox checked={task?.concluded} 
                                    onChange={handleChangeTaskStatus} loading={loading}/>
                                    {!loading ?
                                    <Text className={cx("flex-1", { "line-through": task?.concluded })}>{task?.title}</Text>
                                    : 
                                    <Skeleton className="w-full h-6"/>}
                                    <Container as="div" className="flex gap-1">
                                          <Button variant="icon_secondary" size="icon" onClick={handleDeleteTask} loading={loading}><FaTrash /></Button>
                                          <Button variant="icon_primary" size="icon" onClick={handleEditModeTask} loading={loading}><FaPencilAlt /></Button>
                                    </Container>
                              </Container>
                        </>
                  }
            </Card>
      )
}
