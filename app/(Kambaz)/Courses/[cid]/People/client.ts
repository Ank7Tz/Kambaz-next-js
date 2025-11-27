import { User } from "@/app/(Kambaz)/Database";
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const USER_API = `${HTTP_SERVER}/api/users`;
const COURSE_API = `${HTTP_SERVER}/api/courses`;

export async function getAllUserForCourse(courseId: string): Promise<User[]> {
    const { data } = await axiosWithCredentials.get(`${COURSE_API}/${courseId}/users`);
    return data;
};

export async function addToCourse(courseId: string, userId: string) {
    await axiosWithCredentials.put(`${USER_API}/${userId}/courses/${courseId}`);
}

export async function removeUserFromCourse(courseId: string, userId: string) {
    await axiosWithCredentials.delete(`${USER_API}/${userId}/courses/${courseId}`);
}

export async function FindUsersByFirstName(firstName: string): Promise<User[]> {
    const { data } = await axiosWithCredentials.get(`${USER_API}/search/firstName/${firstName}`);
    return data;
}

export async function FindUserByUserId(userId: string): Promise<User[]> {
    const { data } = await axiosWithCredentials.get(`${USER_API}/${userId}`);
    return data;
}

export async function createNewUser(user: User): Promise<User> {
    const { data } = await axiosWithCredentials.post(`${USER_API}`, user);
    return data;
}

export async function deleteUser(userId: string) {
    const { data } = await axiosWithCredentials.delete(`${USER_API}/${userId}`);
    return data;
}

export async function updateUser(userId: string, user: User): Promise<User> {
    const { data } = await axiosWithCredentials.post(`${USER_API}/FacultyControl/${userId}`, user);
    return data;
}