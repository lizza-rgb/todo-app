import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1> Мой планировщик задач</h1>
      <nav>
        <Link to="/">Задачи</Link>
        <Link to="/about">О приложении</Link>
      </nav>
    </header>
  );
}

export default Header;