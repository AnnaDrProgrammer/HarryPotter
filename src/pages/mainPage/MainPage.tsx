import React from 'react';
import styles from './MainPage.module.css';
import { Link } from 'react-router';

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Добро пожаловать в Хогвартс!</h1>
      </header>

      <main className={styles.main}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/students" className={styles.navLink}>
                Список всех персонажей
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/faculties" className={styles.navLink}>
                Факультеты
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default MainPage;
