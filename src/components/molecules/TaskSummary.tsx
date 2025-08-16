import useTasks from "../../hooks/useTasks";
import Badge from "../atoms/Badge/Badge";
import Text from "../atoms/Text/Text";

export default function TaskSummary() {
  
  const { tasksCount, concludedTasksCount } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
        <Badge variant="primary">{concludedTasksCount} de {tasksCount}</Badge>
      </div>
    </>
  );
}