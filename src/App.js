import { styled, css, Typography } from "@mui/material";

import Logic from "./useTasksLogic";

import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const Container = styled("div")(
  css`
    width: 600px;
    background-color: #123456;
    padding: 20px;
    border-radius: 5px;
  `
);

const Title = styled(Typography)(css`
  color: #fff;
`);

const App = () => {
  const {
    tasks,
    inputValue,
    editedValue,
    handleEditValue,
    handleInputChange,
    handleSubmit,
    deleteTask,
    editTask,
    updateTask,
    handleCompleteTask,
  } = Logic();

  return (
    <Container>
      <Title variant="h4" align="center" gutterBottom>
        Todo List
      </Title>
      <AddTaskForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        editedValue={editedValue}
        handleEditValue={handleEditValue}
        updateTask={updateTask}
        handleCompleteTask={handleCompleteTask}
      />
    </Container>
  );
};

export default App;
