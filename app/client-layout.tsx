"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isWorkoutPage = pathname === "/workout"

  return (
    <>
      <Header />
      {children}
      {!isWorkoutPage && <Footer />}
    </>
  )
}
