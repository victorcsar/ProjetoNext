import { constants } from "buffer"
import { useState } from "react"
import DisplayState from "@/components/DisplayState"
import Topo from "@/components/Topo"



export default function Usestate() {
    const [cont, setCont] = useState<number>(0)


    return (
        <div>
            <Topo></Topo>
            <DisplayState fvalor={setCont} valor={cont}></DisplayState>
        </div>
    )
}