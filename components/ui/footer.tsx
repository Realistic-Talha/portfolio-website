import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { StylishLogo } from "./stylish-logo"

export function Footer() {
  return (
    <footer className="border-t border-[#00FF00]/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <StylishLogo />
            <p className="text-gray-400 text-sm">
              Crafting exceptional digital experiences with Flutter and modern web technologies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#mobile" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#mentoring" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                  Developer Mentoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF00] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF00] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF00] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#00FF00] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#00FF00]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Talha.dev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-[#00FF00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-[#00FF00] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

