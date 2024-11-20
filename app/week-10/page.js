"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SiginInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="m-5">
      {user ? (
        <div>
          <h1>
            Welcome, {user.displayName} ({user.email})
          </h1>
          <Link href="week-10/shopping-list" className="text-xl block">
            Go to shopping list
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-xl bg-orange-600 rounded-md py-2 px-2 mt-3"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <p>Sign In with GitHub</p>
          <button
            type="button"
            className="text-xl bg-orange-600 rounded-md py-2 px-2 mt-3"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
