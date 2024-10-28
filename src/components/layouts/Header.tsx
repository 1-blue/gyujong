"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "#/constants/routes";

import Aside from "./Aside";
import { cn } from "#/lib/utils";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-background lg:px-8">
      <article className="mx-auto flex max-w-screen-xl items-center justify-center px-4 py-2 lg:px-0 lg:py-0">
        <Aside />

        <section className="flex flex-1 justify-center lg:block lg:flex-initial">
          <Link href="/">
            <figure>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={113}
                height={30}
              />
            </figure>
          </Link>
        </section>

        <ul className="hidden flex-1 justify-center gap-2 text-sm lg:flex">
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              target={route.target}
              className={cn(
                "px-3 py-6",
                pathname.includes(route.path) &&
                  "border-b-2 border-primary text-primary",
              )}
            >
              {route.label}
            </Link>
          ))}
        </ul>

        <section className="flex gap-4 text-xs">
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </section>
      </article>
      <ul className="flex gap-4 border-t border-zinc-200 px-4 text-xs lg:hidden">
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            target={route.target}
            className={cn(
              "px-2 py-4",
              pathname.includes(route.path) &&
                "border-b-2 border-primary text-primary",
            )}
          >
            {route.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
