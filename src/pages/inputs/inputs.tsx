import Topo from "@/components/Topo";
import { useState } from "react";


export default function inputs() {
    const [produto, setNomeProduto] = useState<string>("test")
    const [valor, setValor] = useState<string>("")
    const [disponivel, setDisponivel] = useState<string>("")

    return (
        <div>
            <Topo></Topo>
            <div className="campoForm">
                <label htmlFor="">produto</label>
                <input type="text" value={produto} onChange={(evt)=>setNomeProduto(evt.target.value)} />
            </div>
            <div className="campoForm">
                <label htmlFor="">valor</label>
                <input type="text" value={valor} onChange={(evt)=>setValor(evt.target.value)}/>
            </div>
            <div className="campoForm">
                <label htmlFor="">Diponivel:</label>
                <select value={disponivel} onChange={(evt)=>setDisponivel(evt.target.value)}>
                   <option value=""></option> 
                   <option value="Nao">Não</option> 
                   <option value="Sim">Sim</option> 
                </select>
            </div>
            <div>Produto digitado: {produto}</div>
            <div>Valor: {valor}</div>
            <div>disponivel: {disponivel}</div>
        </div>
    )
}