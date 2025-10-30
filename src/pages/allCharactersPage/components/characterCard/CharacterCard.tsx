import React from 'react';
import styles from './CharacterCard.module.css';
import type { Character } from '../../../../types';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className={styles.characterCard}>
      <div className={styles.characterImg}>
        <img
          src={character.image || '/placeholder-wizard.png'}
          alt={character.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-wizard.png';
          }}
        />
      </div>

      <div className={styles.characterInfo}>
        <h3 className={styles.characterName}>{character.name}</h3>

        <div className={styles.characterDetails}>
          <div className={styles.detailItem}>
            <span className={styles.label}>House:</span>
            <span className={styles[`house${character.house}`]}>
              {character.house || 'Unknown'}
            </span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Species:</span>
            <span className={styles.value}>{character.species}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Gender:</span>
            <span className={styles.value}>{character.gender}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Ancestry:</span>
            <span className={styles.value}>
              {character.ancestry || 'Unknown'}
            </span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Actor:</span>
            <span className={styles.value}>{character.actor}</span>
          </div>
        </div>

        {character.alternate_names && character.alternate_names.length > 0 && (
          <div className={styles.alternateNames}>
            <span className={styles.label}>Also known as:</span>
            <span className={styles.value}>
              {character.alternate_names.join(', ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
