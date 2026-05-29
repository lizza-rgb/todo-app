import { Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;