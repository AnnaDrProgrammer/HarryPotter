import styles from './CharactersFacultiesPage.module.css';

export const getStudentCardClass = (house: string) => {
  const baseClass = styles.studentCard;

  switch (house) {
    case 'Gryffindor':
      return `${baseClass} ${styles.gryffindorBorder}`;
    case 'Slytherin':
      return `${baseClass} ${styles.slytherinBorder}`;
    case 'Hufflepuff':
      return `${baseClass} ${styles.hufflepuffBorder}`;
    case 'Ravenclaw':
      return `${baseClass} ${styles.ravenclawBorder}`;
    default:
      return `${baseClass} ${styles.defaultBorder}`;
  }
};

export const getFacultyByButtonClass = (
  facultyId: string,
  selectedFaculty: string,
) => {
  const baseClass = styles.facultyButton;
  const facultyClass = styles[facultyId.toLowerCase()];
  const activeClass =
    selectedFaculty === facultyId ? styles.facultyButtonActive : '';
  const facultyActiveClass =
    selectedFaculty === facultyId
      ? styles[`${facultyId.toLowerCase()}Active`]
      : '';

  return `${baseClass} ${facultyClass} ${activeClass} ${facultyActiveClass}`.trim();
};
