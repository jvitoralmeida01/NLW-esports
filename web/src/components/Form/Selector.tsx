
interface Props {
    children    : React.ReactNode,
    title       : string
}

export function Selector ( { title, children } : Props ) {
    return (
        <button 
            title={title} 
            className="py-3 px-4 rounded bg-zinc-900"
        >
            {children}
        </button>
    );
}