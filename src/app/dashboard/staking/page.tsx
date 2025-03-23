"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lock } from "lucide-react"
import { mockData } from "@/lib/utils"

export default function StakingPage() {
  const [activeTab, setActiveTab] = useState("staked")

  const { user, staking, assets } = mockData

  // Filter available assets for staking
  const availableAssets = assets.filter((asset) => !asset.isLocked)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Staking Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>AED LST Overview</CardTitle>
            <CardDescription>Your AED LST token information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className="text-2xl font-bold">{user.aedBalance} AED</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Value</p>
                <p className="text-2xl font-bold">{user.aedValue}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AED LST Balance</CardTitle>
            <CardDescription>Your AED LST token balance and value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Balance:</span>
              <span className="text-2xl font-bold">{user.aedBalance} AED</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Value:</span>
              <span className="font-medium">{user.aedValue}</span>
            </div>
            <Button variant="outline" className="w-full">
              Transfer AED
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="staked">Your Staked NFTs</TabsTrigger>
          <TabsTrigger value="stake">Stake NFT</TabsTrigger>
        </TabsList>

        <TabsContent value="staked">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staking.stakedNFTs.map((nft) => (
              <Card key={nft.id} className={nft.isExpired ? "border-amber-500" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Staking #{nft.id}</CardTitle>
                      <CardDescription>
                        {nft.type === "tbond" ? "T-Bond" : "Property Deed"} #{nft.tokenId}
                      </CardDescription>
                    </div>
                    {nft.isExpired ? (
                      <Badge variant="outline" className="flex items-center gap-1 border-amber-500 text-amber-500">
                        <CheckCircle className="h-3 w-3" />
                        Ready to Unstake
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Locked
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Value:</span>
                      <span className="font-medium">{nft.value} AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Release Percentage:</span>
                      <span className="font-medium">{nft.releasePercentage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Lock Period:</span>
                      <span className="font-medium">{nft.lockPeriod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">End Date:</span>
                      <span className="font-medium">{nft.lockEndDate}</span>
                    </div>
                    {!nft.isExpired && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Remaining:</span>
                        <span className="font-medium">{nft.remainingDays} days</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                {nft.isExpired && (
                  <CardFooter>
                    <Button className="w-full">Unstake NFT</Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stake">
          <Card>
            <CardHeader>
              <CardTitle>Stake NFT</CardTitle>
              <CardDescription>Stake your NFTs to receive AED tokens</CardDescription>
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
                <label className="text-sm font-medium">Lock Period</label>
                <select className="w-full p-2 rounded-md border border-input bg-background">
                  <option value="30">30 days - 10% release</option>
                  <option value="90">90 days - 20% release</option>
                  <option value="180">180 days - 35% release</option>
                  <option value="365">365 days - 75% release</option>
                </select>
              </div>

              <div className="rounded-lg border p-4 bg-muted/50">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Estimated Value:</span>
                    <span className="text-sm font-medium">1,000.00 AED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Release Percentage:</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Estimated AED Tokens:</span>
                    <span className="text-sm font-medium">200.00 AED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Lock Period:</span>
                    <span className="text-sm font-medium">90 days</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Stake NFT</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

