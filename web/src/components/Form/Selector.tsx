import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface Props {
    children?    : React.ReactNode
    title       : string
    value       : string
    selected    : boolean
}

export function Selector ( { value, title, selected, children } : Props ) {
    return (
        <ToggleGroup.Item 
            value={value}
            title={title} 
            className={`py-3 px-4 rounded ${selected ? 'bg-violet-500' : 'bg-zinc-900'}`}
        >
            {children ?? title[0]}
        </ToggleGroup.Item>
    );
}