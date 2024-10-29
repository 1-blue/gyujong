import { NextPage } from "next";

const points = [
  {
    title: "어렵고 낯선 어휘가 지문에 대거 등장",
    description: `고등 기출 어휘는 물론 처음 보는 글도 읽을 수 있도록\n"유의어와 반의어"까지 함께 학습하여 철저하게 익혀야 합니다!\n알고 있던 단어도 해석이 안된다? 여러가지 뜻이 있는 다의어 때문!`,
  },
  {
    title: "세 줄 이상의 길고 복잡한 문장 등장",
    description: `해석에 자꾸 버퍼링이 걸린다면? 철저한 구문 독해 훈련이 필요하다!\n한 끝 차이로 정반대로 해석되는 필수 구문 학습으로\n정확한 해석은 물론 빠른 핵심 내용 파악까지!`,
  },
  {
    title: "내용 이해가 어려운 추상적이고 전문적인 글이 등장",
    description: `이해를 동반한 해석이 아닌 단순 직역은 문제 풀이를 더욱 어렵게한다.\n독해 유형별 문제풀이 학습과 함께 소재별 글의 특성을 간파하는 메타인지가 필요하다!`,
  },
  {
    title: "개념을 응용하고 적용해야하는 심화 문법 유형이 등장",
    description: `단순한 문법 개념으로는 문제풀이가 불가한 고난도 문법이 대거 등장하여\n내신의 변별력을 낸다. 실제 출제 포인트를 확실히 알고 문장에서 적용하는\n규칙을 정확하게 알고 있어야 한다.`,
  },
];
const abouts = [
  "서강대학교 영어영문학 석사",
  "대성마이맥 고1, 2 영어 강사",
  "강남 대성 학원",
  "대치 두각 학원",
  "대치 명인 학원",
  "대치 이데아 상산고",
];
const publications = [
  "능률(김) LIGHT UP",
  "고1, 2 학력평가 FLASH UP",
  "고등 문법 총정리 WAKE UP",
  "고등 영어 입문 MAKE UP",
  "고2 정시파이터 HOLD UP",
  "강대K 모의고사 영어 출제",
];

const Page: NextPage = () => {
  return (
    <article className="flex flex-col gap-16 px-4">
      <section className="mt-12 flex flex-col items-center gap-3">
        <span className="text-2xl font-bold text-primary lg:text-4xl">
          아이린 선생님과 함께 GO HIGHER
        </span>
        <span className="text-center text-zinc-500">
          수강생들의 이유 있는 선택!
          <br />더 높은 곳을 향하여 여러분과 함께 선장하는 영어 아이린입니다.
        </span>
        <figure className="w-full max-w-7xl object-cover">
          <img
            src="/images/teachers/profile.png"
            alt="teacher"
            className="size-full"
          />
        </figure>
      </section>

      <section>
        <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
          POINT
        </blockquote>
        <ul className="flex flex-col gap-6 pl-8">
          {points.map((point) => (
            <li key={point.title} className="list-disc">
              <span className="font-bold text-primary">{point.title}</span>
              <p className="whitespace-pre-line text-zinc-500">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
            ABOUT
            <br />
            IRENE
          </blockquote>
          <ul className="flex list-disc flex-col pl-8 text-zinc-500">
            {abouts.map((about) => (
              <li key={about}>{about}</li>
            ))}
          </ul>
        </div>
        <div>
          <blockquote className="mb-4 border-l-4 border-zinc-400 px-4 py-2.5 font-bold lg:text-2xl">
            저서 및<br />
            집필활동
          </blockquote>
          <ul className="flex list-disc flex-col pl-8 text-zinc-500">
            {publications.map((publication) => (
              <li key={publication}>{publication}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Page;
