import PrivacyDialogButton from "#/components/common/PrivacyDialogButton";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 border-t border-zinc-200">
      <article className="mx-auto flex max-w-screen-xl flex-col gap-4 p-8 text-xs">
        <section className="flex items-center gap-4">
          <span>이용약관</span>
          <PrivacyDialogButton />
        </section>

        <section className="flex flex-col">
          <span>IRENE 선생님</span>
          <span>본사: 서울시 강남구 봉은사로 26길 25-23</span>
        </section>

        <section>
          <span>Copyright ⓒ 2024 Your ET. IRENE All rights reserved.</span>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
