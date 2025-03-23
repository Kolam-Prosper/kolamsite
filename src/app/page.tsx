import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProductsSection } from "@/components/products"
import { StakingSection } from "@/components/staking"
import { LendingSection } from "@/components/lending"
import { InvestmentsSection } from "@/components/investments"
import { AboutSection } from "@/components/about"
import { SectionDivider } from "@/components/section-divider"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 absolute top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Kolam<span className="text-orange-500">Prosper</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm text-white/80 hover:text-white">
              About
            </Link>
            <Link href="#products" className="text-sm text-white/80 hover:text-white">
              Products
            </Link>
            <Link href="#staking" className="text-sm text-white/80 hover:text-white">
              Staking
            </Link>
            <Link href="#lending" className="text-sm text-white/80 hover:text-white">
              Lending
            </Link>
            <Link href="#investments" className="text-sm text-white/80 hover:text-white">
              Investments
            </Link>
            <Link href="/whitepaper" className="text-sm text-white/80 hover:text-white">
              Whitepaper
            </Link>
            <Link href="/pitch-deck" className="text-sm text-white/80 hover:text-white">
              Pitch Deck
            </Link>
            <Link href="/dashboard">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Launch App</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='%23FF4500' strokeWidth='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-start space-y-4 text-left max-w-3xl mx-auto">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  Revolutionizing Finance <br />
                  <span className="text-orange-500">Through Tokenization</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options. Unlock the
                  potential of real-world assets on the blockchain.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Launch App</Button>
                </Link>
                <Link href="#about">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <AboutSection />
        </section>

        <SectionDivider />

        {/* Products Section */}
        <section id="products" className="py-20 bg-black">
          <ProductsSection />
        </section>

        <SectionDivider />

        {/* Staking Section */}
        <section id="staking" className="py-20 bg-black">
          <StakingSection />
        </section>

        <SectionDivider />

        {/* Lending Section */}
        <section id="lending" className="py-20 bg-black">
          <LendingSection />
        </section>

        <SectionDivider />

        {/* Investments Section */}
        <section id="investments" className="py-20 bg-black">
          <InvestmentsSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}

