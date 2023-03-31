import { styled, css, ListItem } from "@mui/material";
import { motion } from "framer-motion";

const StyledTask = styled(ListItem)(
  ({ completed }) => css`
    background-color: #f5f5f5;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* text-decoration: ${completed ? "line-through" : ""}; */
    opacity: ${completed ? ".5" : "1"};
    transition: opacity 0.3s;
  `
);

const Task = ({ completed, id, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledTask completed={completed} id={id}>
        {children}
      </StyledTask>
    </motion.div>
  );
};

export default Task;
