import { FaPlus } from 'react-icons/fa'
import Button from '../atoms/Button/Button'
import Container from '../atoms/Container/Container'
import TaskItem from '../molecules/TaskItem'
import Text from '../atoms/Text/Text'
import useTask from '../../hooks/useTask'

export default function TasksList() {
      const { prepareTask } = useTask();
      
      function handleNewTask(){
            prepareTask()
      }

      return (
            <>
                  <Container as="section">
                        <Button icon={<FaPlus className="text-secondary-base/75"/>} className="w-full" onClick={handleNewTask}>
                              <Text as='span'>Nova tarefa</Text>
                        </Button>
                  </Container>
                  <Container as="section" className="space-y-2">
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                  </Container>
            </>
      )
}
