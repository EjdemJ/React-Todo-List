import { styled, css, Button, TextField } from "@mui/material";

const StyledForm = styled("form")(css`
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`);

const StyledButton = styled(Button)(
  css`
    height: 56px;
    width: 100px;
    background-color: #123456;
    &:hover {
      background-color: green;
    }
  `
);

const AddTaskForm = ({ handleSubmit, handleInputChange, inputValue }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Enter Task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <StyledButton variant="contained" type="submit">
        Add
      </StyledButton>
    </StyledForm>
  );
};

export default AddTaskForm;
