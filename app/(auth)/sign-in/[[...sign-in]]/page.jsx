"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard"); // redirect signed-in users
    }
  }, [isSignedIn, router]);

  if (isSignedIn) return null; // don't render SignIn if already signed in

  return (
    <div className="flex justify-center pt-10 min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
