function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Удалить
      </button>
    </li>
  );
}

export default TaskItem;