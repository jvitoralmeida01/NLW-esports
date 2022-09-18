import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { useEffect, useState } from "react";
import { GameResponse } from "../App";
import { CheckField } from "./Form/CheckField";
import { MultipleSelectionField } from "./Form/MultipleSelectionField";
import { SelectField } from "./Form/SelectField";
import { TextField } from "./Form/TextField";
import { TimeSpanField } from "./Form/TimeSpanField";

export function NewAdForm () {

    const [games, setGames] = useState<GameResponse[]>([])

    useEffect(()=>{
        fetch('http://localhost:3333/games')
            .then(res => res.json())
            .then(data => {
                setGames(data)
            })
    },[])

    return (
        <form className="mt-8 flex flex-col gap-4">
            
            <SelectField 
                id="game"
                label="Qual o Jogo?"
                placeholder="Selecione o que você que Jogar"
                options={games}
            />
            
            <TextField 
                id="name"
                label="Seu nome (ou nickname)"
                placeholder="Como te chamam dentro do jogo"
            />
            
            <div className="grid grid-cols-2 gap-6">
                <TextField 
                    id="yearsPlaying"
                    label="Joga há quantos anos?"
                    placeholder="Tudo bem ser 0"
                />
                <TextField  
                    id="discord"
                    label="Qual seu Discord?"
                    placeholder="Usuário#0000"
                />
            </div>
            
            <div className="flex gap-6">

                <MultipleSelectionField 
                    id="weekDays" 
                    label="Quando costuma jogar?"
                />
            
                <TimeSpanField 
                    id="hour" 
                    label="Qual horário do dia?"
                />
                
            </div>
            
            <CheckField
                id="useVoiceChannel"
                label="Costumo me conectar ao chat de voz"
            />

            <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 py-4 rounded-md font-semibold hover:bg-zinc-600">
                    Cancelar
                </Dialog.Close>
                <button 
                    className="bg-violet-500 px-5 py-4 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600" 
                    type="submit"
                >
                    <GameController className="w-6 h-6"/> 
                    Encontrar Duo!
                </button>
            </footer>

        </form>
    )
}