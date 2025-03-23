import Image from "next/image"

interface Asset {
  id: string
  name: string
  icon: string
}

const assets: Asset[] = [
  {
    id: "1",
    name: "Bitcoin",
    icon: "/btc.svg",
  },
  {
    id: "2",
    name: "Ethereum",
    icon: "/eth.svg",
  },
  {
    id: "3",
    name: "Litecoin",
    icon: "/ltc.svg",
  },
]

const AssetsPage = () => {
  return (
    <div>
      <h1>Assets</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <Image
              src={asset.icon || "/placeholder.svg"}
              alt={asset.name}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            {asset.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AssetsPage

