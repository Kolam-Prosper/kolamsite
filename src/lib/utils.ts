import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock data for the UI
export const mockData = {
  user: {
    address: "0x1234...5678",
    aedBalance: "1,245.50",
    aedValue: "$1,245.50",
  },
  assets: [
    {
      id: "1001",
      type: "tbond",
      name: "T-Bond #1001",
      description: "UAE Treasury Bond",
      image: "/placeholder.svg?height=400&width=600",
      value: "1,000.00",
      isLocked: false,
    },
    {
      id: "1002",
      type: "tbond",
      name: "T-Bond #1002",
      description: "UAE Treasury Bond",
      image: "/placeholder.svg?height=400&width=600",
      value: "1,000.00",
      isLocked: true,
    },
    {
      id: "2001",
      type: "property",
      name: "Property Deed #2001",
      description: "Dubai Marina Apartment",
      image: "/placeholder.svg?height=400&width=600",
      value: "250,000.00",
      location: "Dubai Marina",
      size: "1,200 sq ft",
      yearBuilt: "2018",
      isLocked: false,
    },
  ],
  staking: {
    stakedNFTs: [
      {
        id: "1",
        tokenId: "1002",
        type: "tbond",
        value: "1,000.00",
        lockPeriod: "90 days",
        releasePercentage: "20%",
        lockEndDate: "2023-12-31",
        remainingDays: 45,
        isExpired: false,
      },
    ],
  },
  lending: {
    loans: [
      {
        id: "1",
        tokenId: "2001",
        type: "property",
        amount: "50,000.00",
        repayAmount: "52,500.00",
        startDate: "2023-06-01",
        endDate: "2023-12-01",
        remainingDays: 30,
        isActive: true,
        isOverdue: false,
      },
    ],
    availableLiquidity: "500,000.00",
  },
  projects: [
    {
      id: "1",
      name: "Dubai Hills Development",
      description: "Residential development project in Dubai Hills",
      targetAmount: "5,000,000.00",
      raisedAmount: "3,250,000.00",
      endDate: "2023-12-31",
      isActive: true,
    },
  ],
}