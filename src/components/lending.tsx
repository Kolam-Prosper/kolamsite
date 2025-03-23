import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LendingSection() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Lending</h2>
        <p className="mt-4 max-w-3xl text-lg text-white/70">
          Access liquidity without risking your assets through our innovative non-liquidating loan options
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-white">Borrow Against Your Assets</CardTitle>
            <CardDescription className="text-white/70">
              Use your tokenized assets as collateral for loans without the risk of liquidation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white/70">Loan-to-Value Ratio</span>
                <span className="text-white font-medium">Up to 70%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white/70">Interest Rates</span>
                <span className="text-white font-medium">From 3.5% APR</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white/70">Repayment Terms</span>
                <span className="text-white font-medium">Flexible</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-white/70">Liquidation Risk</span>
                <span className="text-white font-medium">None</span>
              </div>
            </div>

            <Link href="/dashboard/lending">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Apply for a Loan</Button>
            </Link>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">How Our Non-Liquidating Loans Work</h3>
            <p className="text-white/70 mb-4">
              Traditional DeFi loans come with liquidation risk if collateral value drops. Our innovative approach
              eliminates this risk through:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start">
                <span className="mr-2 text-orange-500">•</span>
                <span>Smart contract-based repayment schedules</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-orange-500">•</span>
                <span>Tokenized real-world asset backing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-orange-500">•</span>
                <span>Flexible repayment options</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-orange-500">•</span>
                <span>Built-in stability mechanisms</span>
              </li>
            </ul>
          </div>

          <Link href="/whitepaper" className="group">
            <Button
              variant="outline"
              className="w-full text-white border-white/20 hover:bg-white/10 group-hover:border-orange-500/50"
            >
              Learn More in Our Whitepaper{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

