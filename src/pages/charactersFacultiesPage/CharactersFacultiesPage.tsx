import React, { useState } from 'react';
import styles from './CharactersFacultiesPage.module.css';
import { useCharacters } from '../../hooks/useCharacters';
import { FACULTIES } from './consts';
import { getStudentCardClass, getFacultyByButtonClass } from './helper';

// 1) Вынести эту страницу в allCharsters (тут пока оставляешь страницу заглушку "Дома")
// 2) в allCharsters добавить поиск по имени персанажа
// 3) Вынести карточку которая будет работать с типом Character и добавить недостоющие поля

const CharactersFacultiesPage: React.FC = () => {
  const { characters, loading, error } = useCharacters();
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');

  const filteredCharacters =
    selectedFaculty === 'all'
      ? characters
      : characters.filter((character) => character.house == selectedFaculty);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div>Загрузка персонажей</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Факультеты хогвартса</h1>

      {/* Фильтрация по факультетам */}
      <div className={styles.facultiesContainer}>
        {FACULTIES.map((faculty) => (
          <button
            key={faculty.id}
            onClick={() => setSelectedFaculty(faculty.id)}
            className={getFacultyByButtonClass(faculty.id, selectedFaculty)}
          >
            {faculty.name}
          </button>
        ))}
      </div>

      {/* перечисление студентов */}
      <div className={styles.counter}>
        <p>
          Количество студентов: {filteredCharacters.length}
          {selectedFaculty !== 'all' && `from ${selectedFaculty}`}
        </p>
      </div>

      {/* гридовая сетка со студентами */}
      <div className={styles.studentsGrid}>
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className={getStudentCardClass(character.house)}
          >
            {character.image && (
              <img
                src={character.image}
                alt={character.name}
                className={styles.avatar}
              />
            )}
            <div className={styles.studentInfo}>
              <h3 className={styles.studentName}>{character.name}</h3>
              <p className={styles.studentHouse}>{character.house}</p>
              {character.actor && (
                <p className={styles.studentActor}>Актер: {character.actor}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className={styles.emptyState}>
          <h3>Студентов не найдено</h3>
          <p>Попробуйте выбрать другой факультет или вернитесь сюда позже</p>
        </div>
      )}
    </div>
  );
};

export default CharactersFacultiesPage;
