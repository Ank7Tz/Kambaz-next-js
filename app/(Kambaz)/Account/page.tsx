"use client";
import { redirect } from "next/navigation";
import { AppRootState } from "../store";
import { useSelector } from "react-redux";

export default function AccountPage() {
  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}