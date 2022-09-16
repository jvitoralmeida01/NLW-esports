
interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

export function TimeSpanField ( { label, id, placeholder, type } : Props ) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label htmlFor={id}>{label||""}</label>
            <div className="grid grid-cols-2 gap-2">
                <input 
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                    id={id+"Start"} 
                    type={type||"time"} 
                    placeholder={placeholder||"De"}
                />
                <input 
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                    id={id+"End"} 
                    type={type||"time"} 
                    placeholder={placeholder||"Até"}
                />
            </div>
        </div>
    )
}