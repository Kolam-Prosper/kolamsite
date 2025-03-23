import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

export function InvestmentsSection() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Investments</h2>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          Diversify your portfolio with our range of tokenized investment opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Treasury Bond Funds</CardTitle>
            <CardDescription className="text-white/70">Tokenized exposure to government treasury bonds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Expected Returns</span>
              <span className="text-white font-medium">4-6% APY</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Risk Level</span>
              <span className="text-white font-medium">Low</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Minimum Investment</span>
              <span className="text-white font-medium">$100</span>
            </div>

            <Link href="/dashboard/investments">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Invest Now</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Real Estate Portfolio</CardTitle>
            <CardDescription className="text-white/70">
              Fractional ownership in premium real estate assets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Expected Returns</span>
              <span className="text-white font-medium">8-12% APY</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Risk Level</span>
              <span className="text-white font-medium">Medium</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Minimum Investment</span>
              <span className="text-white font-medium">$500</span>
            </div>

            <Link href="/dashboard/investments">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Invest Now</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">LST Yield Strategies</CardTitle>
            <CardDescription className="text-white/70">Optimized liquid staking token yield strategies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Expected Returns</span>
              <span className="text-white font-medium">10-15% APY</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Risk Level</span>
              <span className="text-white font-medium">Medium-High</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Minimum Investment</span>
              <span className="text-white font-medium">$1000</span>
            </div>

            <Link href="/dashboard/investments">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Invest Now</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

