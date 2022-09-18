import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

export function CheckField ( { label, id, placeholder, type } : Props ) {
    return (
        <div className="flex mt-2 gap-3 text-sm items-center">
            <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center">
                <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400"/>
                </Checkbox.Indicator>
            </Checkbox.Root>
            {label}
        </div>
    )
}