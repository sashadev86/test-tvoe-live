import type { Metadata } from "next";
import Header from "@/components/Header";
import "./style/globals.css";

export const metadata: Metadata = {
  title: "Онлайн-кинотеатр TVОЁ",
  description: "Фильмы, сериалы и мультфильмы смотреть онлайн в хорошем качестве.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
