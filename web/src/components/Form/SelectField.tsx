import { GameResponse } from "../../App"

interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    options         : GameResponse[],
}

export function SelectField ( { label, id, placeholder, options } : Props ) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="font-semibold">{label||""}</label>
            <select 
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                id={id}  
                defaultValue={""}
            >
                <option disabled className='disabled:text-red'>{placeholder||""}</option>

                {options.map( opt => {
                    return (
                        <option value={opt.id??''}>
                            {opt.title??''}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}