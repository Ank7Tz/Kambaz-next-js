"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import { Provider, useSelector } from "react-redux";
import store, { AppRootState } from "./store";
import { usePathname, useRouter } from "next/navigation";
import Session from "./Account/Session";

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

  useEffect(() => {
    if (currentUser && isPublicResource) {
      router.push("/Dashboard");
    }
    if (!currentUser && !isPublicResource) {
      router.push("/Account/Signin");
    }
  }, [isPublicResource, router]);

  if (!currentUser && !isPublicResource) {
    return null;
  }

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
      <Session>
        <ProtectedLayout>{children}</ProtectedLayout>
      </Session>
    </Provider>
  );
}
