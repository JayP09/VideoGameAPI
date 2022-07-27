import React,{useState, useEffect} from "react"
import Card from "../components/Card"

const VideoGameAPI = () => {
    const [gameTitle, setGameTitle] = useState("")
    const [searchedGame, setSearchedGame] = useState([])

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
            .then((response) => response.json())
            .then((data) => {
                setSearchedGame(data)
            }
        )
    },[gameTitle])

    return (
        <div className="flex md:flex-[50%] flex-col bg-[#7F909B] w-full items-center text-white text-center">
            <h1 className="text-4xl my-5 font-bold">🕹️Video Game Api</h1>
            <input 
                className="m-5 p-2 text-black rounded-md" 
                type="text" 
                placeholder="Game"
                onChange={(e) => setGameTitle(e.target.value)}
            />
            <div className="flex flex-wrap justify-center w-full">
            {searchedGame.map((game,key) => (
                <Card game={game} background="bg-[#27B74E]" key={key} height=""/>
            ))}
            </div>
        </div>
    )
}

export default VideoGameAPI