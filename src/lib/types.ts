export interface Scores {
  math: number;
  english: number;
  science: number;
}

export interface StudentDataItem {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
  scores: Scores;
  isActive: boolean;
}

export type Student = {
  id: string;
  name: string;
  age: number;
  averageScore: number;
  activeLabel: 'Yes' | 'No';
};
