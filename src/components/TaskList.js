import { List } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import Task from "./Task";

// import { mockedTasks } from "../mocks";

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  editedValue,
  handleEditValue,
  updateTask,
  handleCompleteTask,
}) => {
  return (
    <List>
      <AnimatePresence>
        {tasks.map((task) => (
          <Task
            {...task}
            key={task.id}
            deleteTask={deleteTask}
            editTask={editTask}
            editedValue={editedValue}
            handleEditValue={handleEditValue}
            updateTask={updateTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      </AnimatePresence>
    </List>
  );
};

export default TaskList;
