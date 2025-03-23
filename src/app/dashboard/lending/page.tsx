"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, CheckCircle } from "lucide-react"
import { mockData } from "@/lib/utils"

export default function LendingPage() {
  const [activeTab, setActiveTab] = useState("loans")

  const { lending, assets } = mockData

  // Filter available assets for loans
  const availableAssets = assets.filter((asset) => !asset.isLocked)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Lending & Borrowing</h1>
      <p className="text-gray-500 mb-8">Borrow against your tokenized assets or lend to earn interest</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Available Assets</CardTitle>
            <CardDescription>Your tokenized assets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{availableAssets.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
            <CardDescription>Your current loans</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{lending.loans.filter((loan) => loan.isActive).length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available Liquidity</CardTitle>
            <CardDescription>Total funds available for borrowing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{lending.availableLiquidity} AED</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="loans">Your Loans</TabsTrigger>
          <TabsTrigger value="borrow">Borrow</TabsTrigger>
          <TabsTrigger value="lend">Lend</TabsTrigger>
        </TabsList>

        <TabsContent value="loans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lending.loans.map((loan) => (
              <Card key={loan.id} className={loan.isOverdue ? "border-destructive" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Loan #{loan.id}</CardTitle>
                      <CardDescription>
                        {loan.type === "tbond" ? "T-Bond" : "Property Deed"} #{loan.tokenId}
                      </CardDescription>
                    </div>
                    {loan.isActive &&
                      (loan.isOverdue ? (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Overdue
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Active
                        </Badge>
                      ))}
                    {!loan.isActive && (
                      <Badge variant="outline" className="flex items-center gap-1 bg-green-500 text-white">
                        <CheckCircle className="h-3 w-3" />
                        Repaid
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Loan Amount:</span>
                      <span className="font-medium">{loan.amount} AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Repayment Amount:</span>
                      <span className="font-medium">{loan.repayAmount} AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Start Date:</span>
                      <span className="font-medium">{loan.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">End Date:</span>
                      <span className="font-medium">{loan.endDate}</span>
                    </div>
                    {loan.isActive && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Remaining:</span>
                        <span className={`font-medium ${loan.isOverdue ? "text-destructive" : ""}`}>
                          {loan.isOverdue ? "Overdue" : `${loan.remainingDays} days`}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
                {loan.isActive && (
                  <CardFooter>
                    <Button className="w-full" variant={loan.isOverdue ? "destructive" : "default"}>
                      Repay Loan
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="borrow">
          <Card>
            <CardHeader>
              <CardTitle>Create Loan</CardTitle>
              <CardDescription>Borrow AED against your NFT assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Asset</label>
                <select className="w-full p-2 rounded-md border border-input bg-background">
                  <option value="">Select an asset</option>
                  {availableAssets.map((asset) => (
                    <option key={asset.id} value={asset.id}>
                      {asset.type === "tbond" ? "T-Bond" : "Property Deed"} #{asset.id}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Loan-to-Value (LTV): 50%</label>
                <input type="range" min="10" max="70" step="5" defaultValue="50" className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10%</span>
                  <span>70%</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Loan Duration</label>
                <select className="w-full p-2 rounded-md border border-input bg-background">
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="9">9 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Loan Amount (AED)</label>
                <input
                  type="number"
                  defaultValue="500"
                  className="w-full p-2 rounded-md border border-input bg-background"
                />
                <p className="text-xs text-muted-foreground">Max: 1,000.00 AED</p>
              </div>

              <div className="rounded-lg border p-4 bg-muted/50">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Interest Rate:</span>
                    <span className="text-sm font-medium">3% (3 months × 1%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Repayment Amount:</span>
                    <span className="text-sm font-medium">515.00 AED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Loan Term:</span>
                    <span className="text-sm font-medium">3 months</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Loan</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="lend">
          <Card>
            <CardHeader>
              <CardTitle>Lend to the Pool</CardTitle>
              <CardDescription>Provide liquidity to the lending pool and earn interest</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount to Lend (AED)</label>
                <input
                  type="number"
                  defaultValue="1000"
                  className="w-full p-2 rounded-md border border-input bg-background"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Lending Duration: 3 months</label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 3, 6, 9, 12, 18].map((months) => (
                    <div key={months} className="flex items-center space-x-2">
                      <input type="radio" id={`duration-${months}`} name="duration" defaultChecked={months === 3} />
                      <label htmlFor={`duration-${months}`}>
                        {months} {months === 1 ? "month" : "months"}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Current Pool Liquidity</span>
                  <span className="font-medium">{lending.availableLiquidity} AED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Estimated APY</span>
                  <span className="font-medium text-primary">10-12%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Estimated Earnings (min)</span>
                  <span className="font-medium">25.00 AED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Estimated Earnings (max)</span>
                  <span className="font-medium">30.00 AED</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lend Now</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

