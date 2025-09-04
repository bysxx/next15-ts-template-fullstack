"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function GlobalNav() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 px-8 py-4 backdrop-blur-sm backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center justify-start text-2xl font-bold text-gray-900">
          <Link href="/">Next 15</Link>
        </div>

        <div className="flex items-center justify-end gap-x-4 text-gray-600">
          <Link href="/example" className="hover:text-gray-900">
            Example
          </Link>
          <a
            className="flex items-center gap-x-1 hover:text-gray-900"
            href="https://github.com/bysxx/next-ts-template-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <span>Source Code</span>
          </a>
          {session?.user ? (
            <div className="flex items-center gap-x-2">
              <span className="text-sm font-semibold">{session.user.name}</span>
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => signIn("kakao")}
              className="rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;
