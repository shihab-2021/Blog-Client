import LoginPage from "@/components/Login/Login";
import React, { Suspense } from "react";

export default function Login() {
  return (
    <div className="bg-white">
      <Suspense>
        <LoginPage />
      </Suspense>
    </div>
  );
}
