import { ReactNode } from "react";
import Navigation from "./Navigation";

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout) {

  return (
    <div className="relative h-screen flex flex-col row justify-center items-center text-left">

      <main className="mb-12">{children}</main>

      <Navigation />
    </div >
  )
}
