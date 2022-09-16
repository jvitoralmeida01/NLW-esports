
interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

export function TextField ( { label, id, placeholder, type } : Props ) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="font-semibold">{label||""}</label>
            <input 
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                id={id} 
                type={type||"text"}
                placeholder={placeholder||""}
            />
        </div>
    )
}