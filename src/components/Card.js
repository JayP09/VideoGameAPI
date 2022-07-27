import React from "react"

const Card = ({game, background, height}) => {
    return (
        <div className={`flex flex-col items-center justify-between m-5 w-56 ${height} ${background} rounded-md text-white text-center`}>
            <h4 className="text-base py-2 font-bold">{game.internalName}</h4>
            <img src={game.thumb} alt="game thumb" className="w-[80%] rounded-md"/>
            {game.cheapest && <p className="text-base py-3">${game.cheapest}</p>}
            {game.normalPrice && <p className="text-base py-2">Normal Price: ${game.normalPrice}</p>}
            {game.salePrice && <p className="text-base py-2">Deal Price: ${game.salePrice}</p>}
            {game.savings && <h3 className="text-base py-2">YOU SAVE {game.savings.substr(0,2)}</h3>}    
        </div>
    )
}

export default Card