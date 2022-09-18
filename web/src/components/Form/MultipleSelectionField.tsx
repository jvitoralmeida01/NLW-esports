import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";

import { Selector } from './Selector'

interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

export function MultipleSelectionField ( { label, id, placeholder, type } : Props ) {

    const [weekDays, setWeekDays] = useState<string[]>([])

    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor={id}>{label||""}</label>
                <ToggleGroup.Root 
                    type="multiple" 
                    className="grid grid-cols-4 gap-2"
                    value={weekDays}
                    onValueChange={setWeekDays}
                >
                    {days.map( (item, index) => {
                        const selected : boolean = weekDays.includes(''+index)
                        console.log(weekDays, index, selected)
                        return (
                            <Selector 
                                key={index}
                                value={index+''}
                                title={item} 
                                selected={selected}
                            />
                        )
                    })}
                </ToggleGroup.Root>
            </div>
            
        </>
    )
}