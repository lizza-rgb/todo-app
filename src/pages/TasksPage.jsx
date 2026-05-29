import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function TasksPage() {
  // Начальные задачи (как в вашей практике №2)
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Изучить React', completed: false },
    { id: 2, title: 'Сделать практическую работу', completed: true },
    { id: 3, title: 'Подготовиться к защите', completed: false },
  ]);

  // Добавление задачи
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Переключение статуса (выполнено/не выполнено)
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Удаление задачи
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
}

export default TasksPage;