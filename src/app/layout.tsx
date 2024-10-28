import localFont from "next/font/local";

import "#/styles/globals.css";
import { cn } from "#/lib/utils";

import Header from "#/components/layouts/Header";
import Main from "#/components/layouts/Main";
import Footer from "#/components/layouts/Footer";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head></head>

      <body
        className={cn(
          `${pretendard.variable} font-pretendard`,
          "flex min-h-screen flex-col",
        )}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
