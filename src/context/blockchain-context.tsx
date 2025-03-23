"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface BlockchainContextType {
  account: string | null
  chainId: number | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  isConnecting: boolean
  isConnected: boolean
  error: string | null
}

const defaultContext: BlockchainContextType = {
  account: null,
  chainId: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isConnecting: false,
  isConnected: false,
  error: null,
}

const BlockchainContext = createContext<BlockchainContextType>(defaultContext)

export const useBlockchain = () => useContext(BlockchainContext)

export const BlockchainProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Check if window is defined (browser environment)
  const isBrowser = typeof window !== "undefined"

  const connectWallet = async () => {
    if (!isBrowser) return

    setIsConnecting(true)
    setError(null)

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined") {
        throw new Error("MetaMask is not installed. Please install MetaMask to connect.")
      }

      // Request account access
      const accounts = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[]
      const chainIdHex = (await window.ethereum.request({ method: "eth_chainId" })) as string

      setAccount(accounts[0])
      setChainId(Number.parseInt(chainIdHex, 16))
      setIsConnected(true)

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts: unknown) => {
        const newAccounts = accounts as string[]
        if (newAccounts.length === 0) {
          // User disconnected their wallet
          disconnectWallet()
        } else {
          setAccount(newAccounts[0])
        }
      })

      // Listen for chain changes
      window.ethereum.on("chainChanged", (chainId: unknown) => {
        const newChainId = chainId as string
        setChainId(Number.parseInt(newChainId, 16))
      })
    } catch (err) {
      console.error("Error connecting wallet:", err)
      setError(err instanceof Error ? err.message : "Failed to connect wallet")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setChainId(null)
    setIsConnected(false)
  }

  // Check if wallet is already connected on component mount
  useEffect(() => {
    if (isBrowser && typeof window.ethereum !== "undefined") {
      const checkConnection = async () => {
        try {
          // Add an additional check to satisfy TypeScript
          if (!window.ethereum) return

          const accounts = (await window.ethereum.request({ method: "eth_accounts" })) as string[]

          if (accounts.length > 0) {
            const chainIdHex = (await window.ethereum.request({ method: "eth_chainId" })) as string

            setAccount(accounts[0])
            setChainId(Number.parseInt(chainIdHex, 16))
            setIsConnected(true)
          }
        } catch (err) {
          console.error("Error checking wallet connection:", err)
        }
      }

      checkConnection()
    }
  }, [isBrowser])

  const value = {
    account,
    chainId,
    connectWallet,
    disconnectWallet,
    isConnecting,
    isConnected,
    error,
  }

  return <BlockchainContext.Provider value={value}>{children}</BlockchainContext.Provider>
}

// Add TypeScript declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
      on: (event: string, listener: (data: unknown) => void) => void
      removeListener: (event: string, listener: (data: unknown) => void) => void
    }
  }
}

