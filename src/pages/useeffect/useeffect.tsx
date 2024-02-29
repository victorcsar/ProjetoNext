import Topo from "@/components/Topo"
import { useEffect,useState } from "react"

export default function useeffect(){

    const [cont, setCont]=useState<number>(0)

    useEffect(()=>{
        alert("alterou")
    },[cont])

    function add(){
        let c= cont
        c++
        setCont(c)
    }

    return(
        <div>
            <Topo/>
            <div>
                <p>{`valor de cont: ${cont}`}</p>
                <button onClick={add}> ADD 1</button>
            </div>
        </div>
    )
}