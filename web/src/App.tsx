import './styles/main.css'
import logo from './assets/logo-nlw.svg'
import {MagnifyingGlassPlus} from "phosphor-react"

function App() {
    return ( 
        <div className='max-w-[1334px] mx-auto flex flex-col items-center my-20'>

            <img src={logo} ></img>

            <h1 className='text-6xl text-white font-black mt-20'>
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-1.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">League Of Legends</strong>
                        <span className="text-zinc-300 text-sm block mt-1">5 anúncios</span>
                    </div>

                </a>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-2.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Outro Jogo</strong>
                        <span className="text-zinc-300 text-sm block mt-1">2 anúncios</span>
                    </div>

                </a>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-3.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Minecraft</strong>
                        <span className="text-zinc-300 text-sm block mt-1">2 anúncios</span>
                    </div>

                </a>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-4.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Jogo diferente</strong>
                        <span className="text-zinc-300 text-sm block mt-1">10 anúncios</span>
                    </div>

                </a>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-5.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Mais um jogo</strong>
                        <span className="text-zinc-300 text-sm block mt-1">5 anúncios</span>
                    </div>

                </a>
                <a href="" className="relative rounded-lg overflow-hidden">

                    <img src="/game-banner-6.png" alt="" />
                    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                        <strong className="font-bold text-white block">Grande Jogo</strong>
                        <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                    </div>

                </a>
            </div>

            <div className='pt-0.5 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden' >
                <div className='bg-[#2A2634] rounded-lg px-8 py-6 flex justify-between items-center'>

                    <div>
                        <strong className="text-2xl font-black text-white block">League Of Legends</strong>
                        <span className="text-zinc-400 text-sm block mt-1">5 anúncios</span>
                    </div>

                    <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-all text-white rounded flex items-center gap-3">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar Anúncio
                    </button>

                </div>
            </div>

        </div>
    )
}

export default App
