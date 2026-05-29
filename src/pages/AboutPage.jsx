import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div className="app">
      <Header />
      <div className="about-container">
        <h2> О приложении</h2>
        <p>
          Это приложение «Список задач» (Todo List) разработано в рамках
          дисциплины «Вёрстка и создание приложений».
        </p>
        <h3>🛠 Используемые технологии</h3>
        <ul>
          <li>React 19</li>
          <li>React Router DOM</li>
          <li>Vite (сборка)</li>
          <li>CSS3 (адаптивная вёрстка)</li>
        </ul>
        <h3> Возможности</h3>
        <ul>
          <li> Добавление новых задач</li>
          <li> Отметка о выполнении</li>
          <li> Удаление задач</li>
          <li> Адаптивный дизайн</li>
        </ul>
        <h3> Разработчик</h3>
        <p>Абросимова Елизавета, группа ТКБО-01-24</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;