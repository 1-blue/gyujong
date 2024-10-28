/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "#/components/ui";

const items = [
  {
    title: "전공자의 고효율 어휘+문법 강의",
    description: `너무 많아 막막하고 가장 하기 싫은 공부인 단어 암기를 수업 시간에 체계적이고 가장 효율적인 방법으로 해결합니다. 동의어와 반의어는 물론 구문 변형시 사용되는 파생어까지 완벽하게 어휘를 확장하여 장기기억에 저장합니다.`,
    image: "/images/tables/1.jpg",
  },
  {
    title: "내신 100% 적중 변형 포인트",
    description: `자타공인 "지문 분석 원탑" 방대한 고등 영어 내신 시험 범위를 깔끔하게 분석하여 학교별 시험 경향에 100%일치하는 변형포인트로시험 대비 효율은 물론 적중되는 결과로 증명합니다.`,
    image: "/images/tables/2.jpg",
  },
  {
    title: "수능 영어 1등급 토대 완성",
    description: `내신과 수능의 연속성 있는 학습으로 꾸준함이 중요한 언어 학습의 1등급 토대를 완성합니다. 평가원의 출제 메뉴엘에 따른 독해 방법을 통해 메타인지까지 얻어갈 수 있습니다. `,
    image: "/images/tables/3.jpg",
  },
];

const Page: NextPage = () => {
  return (
    <article>
      <section className="relative left-1/2 right-1/2 -mx-[calc(50vw-0.5rem+1px)] w-[calc(100vw-1rem+1px)]">
        <figure className="relative h-[250px] lg:h-[633px]">
          <Image
            src="/images/main.jpg"
            alt="메인 이미지"
            fill
            priority
            className="object-cover"
          />
        </figure>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50">
          <h1 className="text-center text-4xl text-white lg:text-7xl">
            <span className="font-extralight">Your ET. </span>
            <span className="font-bold">IRENE</span>
          </h1>
          <h5 className="text-xl text-white lg:text-4xl">
            <span className="font-extralight">IRENE 2025</span>
            <span className="font-bold"> 1등급 </span>
            <span className="font-extralight">ENGLISH</span>
          </h5>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 py-14 lg:gap-6 lg:py-28">
        <span className="text-2xl font-bold text-primary lg:text-4xl">
          아이린쌤과 함께라면 가볍게 1등급
        </span>
        <span className="text-center text-sub">
          수능 영어를 위한 준비는 고등 영어 전문가와 함께
          <br />
          지금부터 해야합니다.
        </span>

        <Link href="/teacher">
          <Button className="rounded-none text-primary" variant="outline">
            강사소개 바로가기
          </Button>
        </Link>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[calc(50vw-0.5rem+1px)] flex w-[calc(100vw-1rem+1px)] flex-col items-center justify-center bg-primary px-4 py-14 text-white lg:px-0 lg:py-16">
        <span className="mb-3 lg:mb-6">
          금주의 추천 <span className="font-bold">수업영상</span>을 확인해보세요
        </span>
        <span className="mb-3 text-center text-2xl font-bold lg:mb-7 lg:text-4xl">
          아이린쌤의
          <br />
          여름방학 특강
        </span>
        <Link href="/videos" className="mb-7 lg:mb-8">
          <Button className="rounded-none border border-white text-primary text-white shadow-none hover:bg-white/10">
            수업영상 더보기
          </Button>
        </Link>
        <figure className="relative mb-8 w-full lg:mb-16">
          <img
            src="/images/thumbnail.jpg"
            alt="썸네일 이미지"
            className="mx-auto max-h-80 w-full object-cover object-top lg:h-[360px] lg:w-[640px]"
          />
        </figure>
      </section>

      <section className="my-14 lg:my-28">
        <div className="mb-4 flex flex-col items-center gap-3 lg:mb-8 lg:gap-6">
          <span className="text-2xl font-bold text-primary lg:text-4xl">
            TEXT BOOK
          </span>
          <span className="text-center text-sub">
            수능 영어 1등급의 토대를 기르는 탄탄한 교재
          </span>
        </div>

        <div className="mx-auto h-96 w-64 rounded-md bg-indigo-200" />

        <Button
          variant="outline"
          className="mx-auto mt-4 block rounded-none shadow-none lg:mt-9"
        >
          교재 더보기
        </Button>
      </section>

      <section>
        <ul className="flex flex-col lg:flex-row">
          {items.map((item, index) => (
            <li key={index} className="relative">
              <figure className="h-[250px] lg:h-[350px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-left-top"
                />
              </figure>
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-black/50 p-14">
                <span className="font-bold text-white lg:text-4xl">
                  {item.title}
                </span>
                <p className="text-white">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Page;
