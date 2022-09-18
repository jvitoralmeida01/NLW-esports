import './styles/main.css'
import logo from './assets/logo-nlw.svg'
import { GameCard } from './components/GameCard'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'

export interface GameResponse {
    id          : string,
    title       : string,
    bannerUrl   : string,
    _count      : {
        ads     : number
    }
}

function App() {

    const [games, setGames] = useState<GameResponse[]>([])

    useEffect(()=>{
        fetch('http://localhost:3333/games')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    },[])

    return ( 
        <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>

            <img src={logo} ></img>

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                {
                    games.map(game => {
                        return (
                            <GameCard 
                                key={game.id}
                                source={game.bannerUrl}
                                name={game.title}
                                adCount={game._count.ads}
                            />
                        )
                    })
                }
            </div>

            <Banner 
                title="Não encontrou seu duo?"
                subtitle="Publique um anúncio para encontrar novos players!"
            />

        </div>
    )
}

export default App
