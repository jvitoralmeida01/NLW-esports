import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog' 
import { DialogWrapper } from "./DialogWrapper"
import { NewAdForm } from "./NewAdForm"

interface Props {
    title       : string
    subtitle    : string
}

export default function Banner ( {title, subtitle} : Props ) {
    return (
        <div className='pt-0.5 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden' >
            <div className='bg-[#2A2634] rounded-lg px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className="text-2xl font-black text-white block">{title}</strong>
                    <span className="text-zinc-400 text-sm block mt-1">{subtitle}</span>
                </div>
                
                <DialogWrapper>

                    <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-all text-white rounded flex items-center gap-3">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar Anúncio
                    </Dialog.Trigger>

                    <NewAdForm />

                </DialogWrapper>
            </div>
        </div>
    )    
}