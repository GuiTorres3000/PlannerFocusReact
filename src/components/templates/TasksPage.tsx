import Container from "../atoms/Container/Container";
import TaskSummary from "../molecules/TaskSummary";
import TasksList from "../organisms/TasksList";

export default function TasksPage() {
      return (
            <Container as="article" className="px-2 space-y-3">
                  <Container as="header" className="flex items-center justify-between">
                        <TaskSummary />
                  </Container>
                  <TasksList />
            </Container>
      )
}