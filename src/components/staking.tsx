import { Container } from "@/components/ui/container"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StakingSection() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Staking</h2>
        <p className="mt-4 max-w-3xl text-lg text-white/70">Earn passive income by staking your tokenized assets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-white">Basic Staking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">APY</span>
              <span className="text-white font-medium">4.5%</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Lock Period</span>
              <span className="text-white font-medium">30 days</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Min. Stake</span>
              <span className="text-white font-medium">100 USDC</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Rewards</span>
              <span className="text-white font-medium">Weekly</span>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/staking" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start Staking</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1">POPULAR</div>
          <CardHeader>
            <CardTitle className="text-white">Premium Staking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">APY</span>
              <span className="text-white font-medium">7.2%</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Lock Period</span>
              <span className="text-white font-medium">90 days</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Min. Stake</span>
              <span className="text-white font-medium">500 USDC</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Rewards</span>
              <span className="text-white font-medium">Weekly</span>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/staking" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start Staking</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-black/50 border-orange-500/20 hover:border-orange-500/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-white">Elite Staking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">APY</span>
              <span className="text-white font-medium">12.5%</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Lock Period</span>
              <span className="text-white font-medium">180 days</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-white/70">Min. Stake</span>
              <span className="text-white font-medium">2500 USDC</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-white/70">Rewards</span>
              <span className="text-white font-medium">Daily</span>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/staking" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Start Staking</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Container>
  )
}

