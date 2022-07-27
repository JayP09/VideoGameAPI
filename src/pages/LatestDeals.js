import useSWR from "swr"
import Card from "../components/Card"

const fetcher = (...args) => fetch(...args).then((response) => response.json())

const LatestDeals = () => {
    const {data} = useSWR('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3',fetcher)

    return (
        <div className="flex md:flex-[50%] flex-col items-center w-full">
            <h2 className="text-3xl my-4 font-bold">Latest Deals 🔥</h2>
            <div className="flex flex-wrap justify-center w-full">
            {data && data.map((game,key) => (
                <Card game={game} background="bg-[#7F909B]" key={key} height="h-56"/>
            ))}
            </div>
        </div>
    )
}

export default LatestDeals