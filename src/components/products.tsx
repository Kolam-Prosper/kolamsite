import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, FileText, Building, Shield } from "lucide-react"

export function ProductsSection() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h2>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          Discover our suite of tokenized real-world assets and financial instruments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Tokenized T-Bonds</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white/70">
              Government treasury bonds tokenized on the blockchain, providing fractional ownership and enhanced
              liquidity.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Property Deeds</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white/70">
              Real estate ownership tokenized and secured on the blockchain, enabling fractional property investment.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Secure Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white/70">
              Earn passive income by staking your tokenized assets with industry-leading security protocols.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Coins className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-white">Non-Liquidating Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white/70">
              Access liquidity without risking your assets through our innovative non-liquidating loan options.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

