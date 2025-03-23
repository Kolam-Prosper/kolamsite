import Image from "next/image"

export default function Dashboard() {
  const tokens = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      price: 60000,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      price: 4000,
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      icon: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547033579",
      price: 0.2,
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens.map((token) => (
          <div key={token.symbol} className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center mb-2">
              <Image
                src={token.icon || "/placeholder.svg"}
                alt={token.name}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h2 className="text-lg font-semibold ml-2">{token.name}</h2>
            </div>
            <p className="text-gray-600">Price: ${token.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

