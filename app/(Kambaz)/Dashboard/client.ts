import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const USER_API = `${HTTP_SERVER}/api/users`;

export const enrollUserToCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.put(`${USER_API}/${userId}/courses/${courseId}`);
}

export const unrollUserFromCourse = async (userId: string, courseId: string) => {
    await axiosWithCredentials.delete(`${USER_API}/${userId}/courses/${courseId}`);
}