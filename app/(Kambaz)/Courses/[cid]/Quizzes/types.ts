export interface Quiz {
  _id: string;
  title: string;
  description: string;
  course: string;
  
  quizType: "Graded Quiz" | "Practice Quiz" | "Graded Survey" | "Ungraded Survey";
  assignmentGroup: "Quizzes" | "Exams" | "Assignments" | "Project";
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  howManyAttempts: number;
  showCorrectAnswers: string;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  
  dueDate?: Date | string;
  availableDate?: Date | string;
  untilDate?: Date | string;
  
  published: boolean;
  points: number;
}


export interface BaseQuestion {
  _id: string;
  quiz: string;
  course: string;
  title: string;
  type: "multiple-choice" | "true-false" | "fill-in-blank";
  question: string;
  points: number;
  isEditing?: boolean;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  choices: string[];
  correctAnswer: number;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: "true-false";
  correctAnswer: boolean;
}

export interface FillInBlankQuestion extends BaseQuestion {
  type: "fill-in-blank";
  possibleAnswers: string[];
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | FillInBlankQuestion;


export interface AttemptAnswer {
  questionId: string;
  answer: string | number | boolean;
  isCorrect: boolean;
  pointsEarned: number;
}

export interface QuizAttempt {
  _id: string;
  quiz: string;
  student: string;
  course: string;
  attemptNumber: number;
  startedAt: Date | string;
  submittedAt?: Date | string;
  answers: AttemptAnswer[];
  score: number;
  totalPoints: number;
  isCompleted: boolean;
}


export interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "STUDENT" | "FACULTY" | "TA" | "ADMIN";
}


export type QuestionType = "multiple-choice" | "true-false" | "fill-in-blank";

export interface QuizFormData {
  title: string;
  description: string;
  quizType: string;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  howManyAttempts: number;
  showCorrectAnswers: string;
  dueDate?: string;
  availableDate?: string;
  untilDate?: string;
}