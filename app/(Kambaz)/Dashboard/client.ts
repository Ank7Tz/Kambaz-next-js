import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const ENROLLMENT_API = `${HTTP_SERVER}/api/enrollments`;

export const enrollUserToCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.put(`${ENROLLMENT_API}/${userId}/${courseId}`);
}

export const unrollUserFromCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.delete(`${ENROLLMENT_API}/${userId}/${courseId}`);
}