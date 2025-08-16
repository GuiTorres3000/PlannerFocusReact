import { FaPlus } from 'react-icons/fa'
import Button from '../atoms/Button/Button'
import Container from '../atoms/Container/Container'
import TaskItem from '../molecules/TaskItem'
import Text from '../atoms/Text/Text'
import useTasks from '../../hooks/useTasks'

export default function TasksList() {
      const { tasks } = useTasks();
      
      return (
            <>
                  <Container as="section">
                        <Button icon={<FaPlus className="text-secondary-base/75"/>} className="w-full">
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
