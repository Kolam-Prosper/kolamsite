import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowLeft, Download } from "lucide-react"
import { Footer } from "@/components/footer"

export default function WhitepaperPage() {
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
              <h1 className="text-3xl font-bold text-white">Kolam Prosper Whitepaper</h1>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2>Abstract</h2>
              <p>
                Kolam Prosper introduces a revolutionary platform for tokenizing real-world assets (RWAs) on the
                blockchain, creating a bridge between traditional finance and decentralized technology. This whitepaper
                outlines our approach to tokenizing T-bonds, property deeds, and other assets, along with our innovative
                staking and non-liquidating loan mechanisms.
              </p>

              <h2>Introduction</h2>
              <p>
                The global financial system is on the cusp of a significant transformation. Blockchain technology offers
                unprecedented opportunities to tokenize real-world assets, bringing liquidity, transparency, and
                accessibility to previously illiquid markets. Kolam Prosper is at the forefront of this revolution,
                creating a comprehensive ecosystem for tokenized assets.
              </p>

              <h2>Market Overview</h2>
              <p>
                The market for tokenized real-world assets is projected to reach $16 trillion by 2030, representing a
                significant portion of the global economy. Current challenges in this space include regulatory
                uncertainty, technological limitations, and market fragmentation. Kolam Prosper addresses these
                challenges through our innovative platform and strategic partnerships.
              </p>

              <h2>Technology</h2>
              <p>
                Our platform is built on the Ethereum blockchain, leveraging smart contracts for secure and transparent
                asset tokenization. We implement a multi-layered security architecture, including formal verification of
                smart contracts, multi-signature wallets, and regular security audits. Our technology stack includes:
              </p>
              <ul>
                <li>Ethereum blockchain for core functionality</li>
                <li>Layer 2 scaling solutions for reduced gas fees</li>
                <li>IPFS for decentralized storage of asset documentation</li>
                <li>Chainlink oracles for reliable price feeds</li>
              </ul>

              <h2>Tokenization Process</h2>
              <p>Our asset tokenization process involves several key steps:</p>
              <ol>
                <li>Legal verification and due diligence of the underlying asset</li>
                <li>Creation of a legal wrapper or Special Purpose Vehicle (SPV)</li>
                <li>Smart contract deployment and token issuance</li>
                <li>Secondary market listing and liquidity provision</li>
              </ol>

              <h2>Non-Liquidating Loans</h2>
              <p>
                Traditional DeFi loans come with liquidation risk if collateral value drops. Our innovative approach
                eliminates this risk through smart contract-based repayment schedules, tokenized real-world asset
                backing, flexible repayment options, and built-in stability mechanisms.
              </p>

              <h2>Tokenomics</h2>
              <p>
                The KOLAM token serves as the governance and utility token of our ecosystem. Token holders can
                participate in platform governance, receive fee discounts, and access premium features. The total supply
                is capped at 100 million tokens, with the following allocation:
              </p>
              <ul>
                <li>40% - Community and ecosystem development</li>
                <li>25% - Team and advisors (with 3-year vesting)</li>
                <li>20% - Treasury and reserves</li>
                <li>15% - Initial token sale</li>
              </ul>

              <h2>Roadmap</h2>
              <p>Our development roadmap includes the following key milestones:</p>
              <ul>
                <li>Q2 2023: Platform beta launch and initial asset tokenization</li>
                <li>Q3 2023: Full platform launch and secondary market integration</li>
                <li>Q4 2023: Non-liquidating loan feature release</li>
                <li>Q1 2024: Expansion to additional asset classes</li>
                <li>Q2 2024: Cross-chain integration and interoperability</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Kolam Prosper represents a significant advancement in the tokenization of real-world assets. By bridging
                traditional finance with blockchain technology, we&apos;re creating new opportunities for investors and
                asset holders alike. Our platform&apos;s innovative features, including non-liquidating loans and secure
                staking, position us at the forefront of the financial revolution.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

