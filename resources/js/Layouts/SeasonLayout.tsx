import { ReactNode } from "react";

export type SeasonLayoutProps = {
  children: ReactNode;
  title: string;
};

export const SeasonLayout = ({ children, title }: SeasonLayoutProps) => {
  return (
    <>
      <header className="container px-4 my-4 text-center">
        <h1 className="text-6xl font-festive">{title}</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-white"></footer>
    </>
  );
};
