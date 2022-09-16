
export interface Props {
    source  : string,
    name    : string,
    adCount : number
}

export function GameCard ( { source, name, adCount } : Props) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">

            <img src={source} alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{name}</strong>
                <span className="text-zinc-300 text-sm block mt-1">{adCount} anúncio{adCount > 1 ? 's' : ''}</span>
            </div>
            
        </a>
    )
}