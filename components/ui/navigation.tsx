"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { usePathname } from "next/navigation"
import { StylishLogo } from "./stylish-logo"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-[#00FF00]/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <StylishLogo />
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${
                  pathname === item.href ? "text-[#00FF00]" : "text-gray-400"
                } hover:text-[#00FF00] transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-[#00FF00] hover:text-[#00FF00]/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

