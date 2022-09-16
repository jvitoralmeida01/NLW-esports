import * as Dialog from "@radix-ui/react-dialog";

interface Props {
    children : React.ReactNode[]
}

export function DialogWrapper ( {children} : Props ) {
    return (
        <Dialog.Root>
            {children[0]}
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-2xl">
                    <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
                    {children[1]}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}