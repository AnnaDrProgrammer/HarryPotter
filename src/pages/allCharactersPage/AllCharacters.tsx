// components/pages/HomePage.tsx
import React from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import type { Character } from '../../types';
import styles from './AllCharacters.module.css';
import CharacterCard from './components/characterCard/CharacterCard';

export const AllCharactersPage: React.FC = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (characters.length === 0) {
    return <div className={styles.noCharacters}>No characters found.</div>;
  }

  return (
    <div className={styles.AllCharactersPage}>
      <header className={styles.AllCharactersPageHeader}>
        <h1>Harry Potter Characters</h1>
        <p>Discover all characters from the Wizarding World</p>
      </header>

      <div className={styles.charactersGrid}>
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
