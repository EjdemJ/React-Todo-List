import { useState } from "react";

const useTasksLogic = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editedValue, setEditedValue] = useState("");

  const addTask = (task) => {
    if (task === "") {
      alert("Cannot have empty tasks!");
      return;
    }

    setTasks([
      {
        title: task,
        completed: false,
        editing: false,
        id: Math.random().toString(36).substring(2, 8),
      },
      ...tasks,
    ]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (id) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.completed) {
          alert("Cannot edit completed tasks!");
          return task;
        }
        return { ...task, editing: !task.editing };
      }
      return task;
    });
    setTasks(editedTasks);
  };

  const updateTask = (id) => {
    if (editedValue === "") {
      alert("Cannot have empty tasks!");
      return;
    }
    const updatedTasks = tasks.map((task) => {
      if (task.id === id)
        return { ...task, title: editedValue, editing: !task.editing };

      return task;
    });
    setTasks(updatedTasks);
    setEditedValue("");
  };

  const handleCompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.editing) {
        alert("Cannot complete task while editing!");
        return task;
      }
      if (task.id === id) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleEditValue = (e) => setEditedValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  return {
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
  };
};

export default useTasksLogic;
