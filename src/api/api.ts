import axios from 'axios';
import type { Character } from '../types';

const ALL_CHARACTERS_API_URL = 'https://hp-api.onrender.com/api/characters';

export const allCharactersApi = {
  getAllCharacters: async (): Promise<Character[]> => {
    const response = await axios.get(ALL_CHARACTERS_API_URL);
    return response.data;
  },
};


// const SPECIFIC_CHARACTER_BY_ID_API = "https://hp-api.onrender.com/api/character/:id";
// const HOGWARTS_STUDENTS_API = "https://hp-api.onrender.com/api/characters/students";
// const HOGWARTS_STAFF_API = "https://hp-api.onrender.com/api/characters/staff";
// const CHARACTERS_HOUSE_API = "https://hp-api.onrender.com/api/characters/house/gryffindor";
// const ALL_SPELLS_API = "https://hp-api.onrender.com/api/spells";