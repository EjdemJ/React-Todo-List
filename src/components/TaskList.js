import { styled, css, List, ListItem, Typography, Input } from "@mui/material";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";

// import { mockedTasks } from "../mocks";

const StyledListItem = styled(ListItem)(
  ({ completed }) => css`
    background-color: #f5f5f5;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: ${completed ? "line-through" : ""};
  `
);

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
}) => {
  return (
    <List>
      {tasks.map(({ title, id, completed, editing }) => (
        <StyledListItem key={id} completed={completed}>
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
          </IconsWrapper>
        </StyledListItem>
      ))}
    </List>
  );
};

export default TaskList;
