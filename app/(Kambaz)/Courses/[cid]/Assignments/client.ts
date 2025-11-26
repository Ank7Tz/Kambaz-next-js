import { Assignment } from '@/app/(Kambaz)/Database';
import axios from 'axios';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API = `${HTTP_SERVER}/api/assignments`

const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENT_API}/${courseId}`);
    return data;
}

export const createAssignment = async (courseId: string, assignment: Assignment): Promise<Assignment> => {
    const { data } = await axiosWithCredentials.post(`${ASSIGNMENT_API}/${courseId}`, assignment);
    return data;
}

export const fetchAssignment = async (courseId: string, assignmentId: string): Promise<Assignment> => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENT_API}/${courseId}/${assignmentId}`);
    return data;
}

export const updateAssignment = async (courseId: string, assignmentId: string, updatedAssignment: Assignment): Promise<Assignment> => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENT_API}/${courseId}/${assignmentId}`, updatedAssignment);
    return data;
}

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${courseId}/${assignmentId}`);
}