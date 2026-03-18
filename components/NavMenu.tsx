"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { NAV_CONFIG } from "@/constants/navigation";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="mb-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {session?.user?.name}
        </p>
        <span className="text-sm font-semibold text-white truncate block">
          {session?.user?.name}
        </span>
        <button
          className="text-xs text-red-400 hover:text-red-300 transition-colors mt-1"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="mb-4">
      <span className="text-sm text-gray-400">Not signed in</span> <br />
      <button
        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const getLinkStyle = (href: string) =>
    pathname === href ? NAV_CONFIG.styles.active : NAV_CONFIG.styles.inactive;

  return (
    <nav className="h-full border-r border-gray-800 pr-6">
      <AuthButton />
      <hr className="my-4 border-gray-800" />

      <ul className="space-y-2">
        <li>
          <Link href="/" className={getLinkStyle("/")}>
            Home
          </Link>
        </li>

        {session && (
          <>
            <li>
              <Link href="/protected" className={getLinkStyle("/protected")}>
                Protected Route
              </Link>
            </li>

            <li>
              <Link
                href="/apiFromClient"
                className={getLinkStyle("/apiFromClient")}
              >
                ApiFromClient
              </Link>
            </li>

            <li>
              <Link
                href="/apiFromServer"
                className={getLinkStyle("/apiFromServer")}
              >
                ApiFromServer
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
