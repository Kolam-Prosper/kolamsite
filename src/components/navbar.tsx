"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useBlockchain } from "@/context/blockchain-context"

export const Navbar = () => {
  const { account, connectWallet, disconnectWallet, isConnected, isConnecting } = useBlockchain()

  // Format account address for display
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Kolam<span className="text-orange-500">Prosper</span>
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/dashboard" className="text-sm text-white/80 hover:text-white">
            Dashboard
          </Link>
          {isConnected && account ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/80">{formatAddress(account)}</span>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                onClick={disconnectWallet}
              >
                Disconnect
              </Button>
            </div>
          ) : (
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

