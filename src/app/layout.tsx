import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { inter, urbanist } from "@/assets/fonts"

export const metadata: Metadata = {
  title: "Wealthup | Assignment",
  description: "A Wealthup Wealthomete assignment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className, urbanist.variable)}>
        <main className="mx-auto min-h-svh w-full max-w-[1320px] px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
