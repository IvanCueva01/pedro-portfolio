"use client"

import { useState } from "react"
import { Menu, X, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "My Skills" },
    { href: "#experience", label: "Experiencie" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Pedro Cueva</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="mailto:pedrocuevaof@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <Mail className="w-4 h-4 mr-1" />
            </a>
            <a href="https://linkedin.com/in/ivan-cueva" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/IvanCueva01" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
              <a href="mailto:pedrocuevaof@gmail.com" className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
              <a href="https://linkedin.com/in/ivan-cueva" className="flex items-center text-gray-600">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a href="https://github.com/IvanCueva01" className="flex items-center text-gray-600">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
