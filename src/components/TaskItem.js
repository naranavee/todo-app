import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../store/actions';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask({ ...task, title: editedTitle, description: editedDescription }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
        className="task-checkbox"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="task-input"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="task-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <span className="task-description">{task.description}</span>
          <button onClick={handleEdit} className="edit-button">Edit</button>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
