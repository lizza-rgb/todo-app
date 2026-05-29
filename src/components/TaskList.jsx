import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2> Мои задачи</h2>
      {tasks.length === 0 ? (
        <p className="empty-message">✨ Задач пока нет. Добавьте первую!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;