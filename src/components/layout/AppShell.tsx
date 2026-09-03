import type { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8 sm:py-10">{children}</main>
      <Footer />
    </div>
  )
}
