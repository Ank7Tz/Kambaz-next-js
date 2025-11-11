"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import { Provider, useSelector } from "react-redux";
import store, { AppRootState } from "./store";
import { usePathname, useRouter } from "next/navigation";

function ProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );

  const publicRoutes = ["/Account/Signin", "/Account/Signup"];

  const isPublicResource = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

    // ✅ Use useEffect for redirect (side effect, not during render)
  useEffect(() => {
    if (!currentUser && !isPublicResource) {
      router.push("/Account/Signin");
    }
  }, [currentUser, isPublicResource, router]);

  // ✅ Early return to prevent rendering protected content
  if (!currentUser && !isPublicResource) {
    return null;
  }
  
  // if (!currentUser && !isPublicResource) {
  //   router.push("/Account/Signin");
  //   return null;
  // }

  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        <div>
          <KambazNavigation />
        </div>
        <div className="wd-main-content-offset p-3 flex-fill">{children}</div>
      </div>
    </div>
  );
}

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <ProtectedLayout>{children}</ProtectedLayout>
    </Provider>
  );
}
