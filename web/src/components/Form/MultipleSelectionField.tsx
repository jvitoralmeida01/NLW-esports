import { Selector } from './Selector'

interface Props {
    label?          : string,
    id              : string,
    placeholder?    : string,
    type?           : string,
}

export function MultipleSelectionField ( { label, id, placeholder, type } : Props ) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor={id}>{label||""}</label>
                <div className="grid grid-cols-4 gap-2">
                    <Selector title="Segunda">  S </Selector>
                    <Selector title="Terça">    T </Selector>
                    <Selector title="Quarta">   Q </Selector>
                    <Selector title="Quinta">   Q </Selector>
                    <Selector title="Sexta">    S </Selector>
                    <Selector title="Sábado">   S </Selector>
                    <Selector title="Domingo">  D </Selector>
                </div>
            </div>
            
        </>
    )
}