import { styled, css, List, Typography, Input } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import Task from "./Task";

// import { mockedTasks } from "../mocks";

const IconsWrapper = styled("div")(
  css`
    display: flex;
    align-items: center;
    gap: 10px;
  `
);

const EditWrapper = styled("div")(
  css`
    display: flex;
    align-items: center;
    gap: 10px;
  `
);

const EditTaskInput = styled(Input)(
  css`
    height: 40px;
  `
);

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
        {tasks.map(({ title, id, completed, editing }) => (
          <Task key={id} completed={completed}>
            {editing ? (
              <EditWrapper>
                <EditTaskInput value={editedValue} onChange={handleEditValue} />
                <AiFillCheckSquare
                  size={30}
                  color="#123456"
                  cursor="pointer"
                  onClick={() => updateTask(id)}
                />
              </EditWrapper>
            ) : (
              <Typography variant="h6">{title}</Typography>
            )}

            <IconsWrapper>
              <FaEdit
                size={30}
                color="#123456"
                cursor="pointer"
                onClick={() => editTask(id)}
              />
              <BsFillTrashFill
                size={30}
                color="#123456"
                cursor="pointer"
                onClick={() => deleteTask(id)}
              />
              <AiOutlineCheck
                size={30}
                color="#123456"
                cursor="pointer"
                onClick={() => handleCompleteTask(id)}
              />
            </IconsWrapper>
          </Task>
        ))}
      </AnimatePresence>
    </List>
  );
};

export default TaskList;
