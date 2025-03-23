import { Container } from "@/components/ui/container"

export function AboutSection() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Kolam Prosper</h2>
        <div className="mt-6 max-w-3xl text-lg text-white/70">
          <p className="mb-4">
            Kolam Prosper is revolutionizing the financial landscape by bringing real-world assets onto the blockchain
            through tokenization. Our platform bridges traditional finance with decentralized technology, creating new
            opportunities for investors and asset holders alike.
          </p>
          <p className="mb-4">
            By tokenizing T-bonds, property deeds, and other real-world assets, we&apos;re unlocking liquidity and
            enabling fractional ownership in previously illiquid markets. Our secure staking and non-liquidating loan
            options provide flexible financial solutions while maintaining the security and transparency of blockchain
            technology.
          </p>
          <p>
            Founded by a team of financial and blockchain experts, Kolam Prosper is committed to democratizing access to
            premium financial instruments and creating a more inclusive global economy.
          </p>
        </div>
      </div>
    </Container>
  )
}

