import { User } from "@/app/(Kambaz)/Database";
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const ENROLLMENT_API = `${HTTP_SERVER}/api/enrollments`;
const USER_API = `${HTTP_SERVER}/api/users`;

export async function getAllUserForCourse(courseId: string): Promise<User[]> {
    const { data } = await axiosWithCredentials.get(`${ENROLLMENT_API}/${courseId}`);
    return data;
};

export async function addToCourse(courseId: string, userId: string) {
    await axiosWithCredentials.put(`${ENROLLMENT_API}/${userId}/${courseId}`);
}

export async function removeUserFromCourse(courseId: string, userId: string) {
    await axiosWithCredentials.delete(`${ENROLLMENT_API}/${userId}/${courseId}`);
}

export async function FindUsersByFirstName(firstName: string): Promise<User[]> {
    const { data } = await axiosWithCredentials.get(`${USER_API}/search/firstName/${firstName}`);
    return data;
}

export async function FindUserByUserId(userId: string): Promise<User[]> {
    const {data} = await axiosWithCredentials.get(`${USER_API}/search/userId/${userId}`);
    return data;
}