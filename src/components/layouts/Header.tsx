import Image from "next/image";
import Link from "next/link";

const routes = [
  { label: "강사소개", path: "/teacher" },
  { label: "수업영상", path: "/videos" },
  { label: "자료", path: "/materials" },
  {
    label: "교재",
    path: "https://bthexaplus.shop.blogpay.co.kr/good/product_list?sCate=202623&sStep=categoryStep1",
    target: "_blank",
  },
  { label: "퀴즈로", path: "/quizro" },
  { label: "Q&A", path: "/qna" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-background px-8 py-4">
      <article className="mx-auto flex max-w-screen-xl items-center justify-center">
        <section>
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

        <ul className="flex flex-1 justify-center gap-7 text-sm">
          {routes.map((route) => (
            <Link key={route.path} href={route.path} target={route.target}>
              {route.label}
            </Link>
          ))}
        </ul>

        <section className="flex gap-4 text-xs">
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </section>
      </article>
    </header>
  );
};

export default Header;
