import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Twitter, Linkedin, Github, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Kolam<span className="text-orange-500">Prosper</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm">
              Revolutionizing finance through tokenization of real-world assets on the blockchain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/60 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white/60 hover:text-orange-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-white/60 hover:text-orange-500">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/60 hover:text-orange-500 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white/60 hover:text-orange-500 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#staking" className="text-white/60 hover:text-orange-500 text-sm">
                  Staking
                </Link>
              </li>
              <li>
                <Link href="#lending" className="text-white/60 hover:text-orange-500 text-sm">
                  Lending
                </Link>
              </li>
              <li>
                <Link href="#investments" className="text-white/60 hover:text-orange-500 text-sm">
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/whitepaper" className="text-white/60 hover:text-orange-500 text-sm">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/pitch-deck" className="text-white/60 hover:text-orange-500 text-sm">
                  Pitch Deck
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-orange-500 text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-orange-500 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-orange-500 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-orange-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-orange-500 text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Kolam Prosper. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

