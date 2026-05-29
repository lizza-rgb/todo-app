import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите новую задачу..."
        className="task-input"
      />
      <button type="submit" className="add-button">+ Добавить</button>
    </form>
  );
}

export default TaskForm;