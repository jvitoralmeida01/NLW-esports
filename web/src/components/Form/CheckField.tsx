
interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

export function CheckField ( { label, id, placeholder, type } : Props ) {
    return (
        <div className="flex mt-2 gap-2 text-sm">
            <input 
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                id={id} 
                type={type||"checkbox"} 
                placeholder={placeholder||""} 
            />
            {label}
        </div>
    )
}