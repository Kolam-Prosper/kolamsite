import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PitchDeckPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Kolam<span className="text-orange-500">Prosper</span>
              </span>
            </Link>
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-orange-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">Kolam Prosper Pitch Deck</h1>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="space-y-8">
              <Card className="bg-black/50 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold text-white mb-2">Kolam Prosper</h2>
                      <p className="text-xl text-orange-500">Revolutionizing Finance Through Tokenization</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Slide 1: Title</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center max-w-md">
                      <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
                      <ul className="text-left space-y-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">
                            Traditional assets are illiquid and have high barriers to entry
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">DeFi loans carry liquidation risk</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">Limited access to premium financial instruments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Slide 2: Problem Statement</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center max-w-md">
                      <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                      <ul className="text-left space-y-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">
                            Tokenization of real-world assets (T-bonds, property deeds)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">Non-liquidating loan mechanisms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">Secure staking with competitive yields</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span>
                          <span className="text-white/80">Democratized access to premium investments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">Slide 3: Our Solution</p>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <span className="text-white/70">3 / 12</span>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

