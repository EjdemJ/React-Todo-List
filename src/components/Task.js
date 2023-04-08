import { styled, css, ListItem, Input, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const StyledTask = styled(ListItem)(
  ({ completed }) => css`
    background-color: #f5f5f5;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: ${completed ? ".5" : "1"};
    transition: opacity 0.3s;
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

const Task = ({
  id,
  completed,
  editing,
  title,
  editedValue,
  handleEditValue,
  updateTask,
  editTask,
  deleteTask,
  handleCompleteTask,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledTask completed={completed}>
        {editing ? (
          <EditWrapper>
            <EditTaskInput
              value={editedValue}
              onChange={handleEditValue}
              placeholder="Edit Task..."
            />
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
      </StyledTask>
    </motion.div>
  );
};

export default Task;
