import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BlockchainProvider } from "@/context/blockchain-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kolam Prosper | Tokenized Real-World Assets",
  description: "Revolutionizing finance with tokenized T-bonds, property deeds, staking, lending, and LST investments",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <BlockchainProvider>{children}</BlockchainProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

