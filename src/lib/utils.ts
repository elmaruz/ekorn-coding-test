import * as types from './types';

export const calculateAge = (
  birthDate: Date,
  today: Date = new Date(),
): number => {
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassedThisYear) {
    age--;
  }

  return age;
};

export const calculateStudentAverageScore = (scores: types.Scores): number => {
  const scoresArray = Object.values(scores);
  const sum = scoresArray.reduce((acc, curr) => acc + curr, 0);

  return Math.round(sum / scoresArray.length);
};
