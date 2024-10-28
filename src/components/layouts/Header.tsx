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
    <header className="border-b border-zinc-200 py-4 sticky top-0 bg-background">
      <article className="max-w-screen-xl mx-auto flex justify-center items-center">
        <section>
          <figure>
            <Image src="/images/logo.png" alt="logo" width={113} height={30} />
          </figure>
        </section>

        <ul className="flex-1 flex gap-7 justify-center text-sm">
          {routes.map((route) => (
            <Link key={route.path} href={route.path} target={route.target}>
              {route.label}
            </Link>
          ))}
        </ul>

        <section className="text-xs flex gap-4">
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </section>
      </article>
    </header>
  );
};

export default Header;
