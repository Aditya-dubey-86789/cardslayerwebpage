import type React from "react"
import type { Metadata } from "next"
import { Rowdies } from "next/font/google"
import "./globals.css"

const rowdies = Rowdies({
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Card Slayer - Join the Quest",
  description: "Wield the power of the ancient blade. Join the quest and challenge your destiny.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rowdies.className}>{children}</body>
    </html>
  )
}



import './globals.css'