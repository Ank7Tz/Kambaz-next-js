import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      if (!currentUser) {
        dispatch(setCurrentUser(null));
        router.push("/Account/Login");
      }
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
