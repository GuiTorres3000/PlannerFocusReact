import { FaPlus } from 'react-icons/fa'
import Button from '../atoms/Button/Button'
import Container from '../atoms/Container/Container'
import TaskItem from '../molecules/TaskItem'
import Text from '../atoms/Text/Text'
import useTask from '../../hooks/useTask'
import useTasks from '../../hooks/useTasks'
import type { Task } from '../../domain/taskSchema'

export default function TasksList() {
      const { tasks, isLoadingTasks } = useTasks();
      const { prepareTask } = useTask();
      
      console.log(tasks);

      function handleNewTask(){
            prepareTask()
      }
      
      return (
            <>
                  <Container as="section">
                        <Button icon={<FaPlus className="text-secondary-base/75"/>} className="w-full" 
                        onClick={handleNewTask} disabled={tasks.some((task) => task.state === "creating") || isLoadingTasks}>
                              <Text as='span'>Nova tarefa</Text>
                        </Button>
                  </Container>
                  {!isLoadingTasks ?
                  <Container as="section" className="space-y-2">
                        {tasks.map((task) => <TaskItem task={task} key={task.id}/>)}
                  </Container>
                  :
                  <Container as="section" className="space-y-2">
                        <TaskItem task={{} as Task} loading/>
                  </Container>
                  }
            </>
      )
}
