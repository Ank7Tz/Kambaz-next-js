import axios from "axios";
import type { Quiz, Question, QuizAttempt } from "./types";

const REMOTE_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const API_BASE = `${REMOTE_SERVER}/api`;

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const getQuizzesForCourse = async (courseId: string): Promise<Quiz[]> => {
  const response = await axiosWithCredentials.get(
    `${API_BASE}/courses/${courseId}/quizzes`
  );
  return response.data;
};

export const findQuizById = async (courseId: string, quizId: string): Promise<Quiz> => {
  const response = await axiosWithCredentials.get(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}`
  );
  return response.data;
};

export const createQuiz = async (
  courseId: string,
  quizId: string,
  quizData: Partial<Quiz>
): Promise<Quiz> => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}`,
    quizData
  );
  return response.data;
};

export const updateQuiz = async (
  courseId: string,
  quizId: string,
  quizData: Partial<Quiz>
): Promise<any> => {
  const response = await axiosWithCredentials.put(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}`,
    quizData
  );
  return response.data;
};

export const deleteQuiz = async (courseId: string, quizId: string): Promise<any> => {
  const response = await axiosWithCredentials.delete(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}`
  );
  return response.data;
};

export const publishQuiz = async (
  courseId: string,
  quizId: string
): Promise<number> => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/publish`
  );
  return response.status;
};

export const unpublishQuiz = async (
  courseId: string,
  quizId: string
): Promise<number> => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/unpublish`
  );
  return response.status;
};

export const getQuestionsForQuiz = async (
  courseId: string,
  quizId: string
): Promise<Question[]> => {
  const response = await axiosWithCredentials.get(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/questions`
  );
  return response.data;
};

export const createQuestion = async (
  courseId: string,
  quizId: string,
  questionData: Partial<Question>
): Promise<Question> => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/questions`,
    questionData
  );
  return response.data;
};

export const updateQuestion = async (
  courseId: string,
  quizId: string,
  questionId: string,
  questionData: Partial<Question>
): Promise<any> => {
  const response = await axiosWithCredentials.put(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`,
    questionData
  );
  return response.data;
};

export const deleteQuestion = async (
  courseId: string,
  quizId: string,
  questionId: string
): Promise<any> => {
  const response = await axiosWithCredentials.delete(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/questions/${questionId}`
  );
  return response.data;
};

export const createAttempt = async (
  courseId: string,
  quizId: string,
  answers: { questionId: string; answer: any }[]
): Promise<QuizAttempt> => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/attempts`,
    { answers }
  );
  return response.data;
};

export const findQuizAttemptById = async (
  courseId: string,
  quizId: string,
  userId: string
): Promise<QuizAttempt[]> => {
  const response = await axiosWithCredentials.get(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/attempts/${userId}`
  );
  return response.data;
};

export const getLatestAttempt = async (
  courseId: string,
  quizId: string,
  userId: string
): Promise<QuizAttempt | null> => {
  const response = await axiosWithCredentials.get(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/attempts/${userId}/latest`
  );
  return response.data;
};

export const updateAttempt = async (
  courseId: string,
  quizId: string,
  attemptId: string,
  attemptData: Partial<QuizAttempt>
): Promise<any> => {
  const response = await axiosWithCredentials.put(
    `${API_BASE}/courses/${courseId}/quizzes/${quizId}/attempts/${attemptId}`,
    attemptData
  );
  return response.data;
};