interface DisplayStateProps {
    valor: number,
    fvalor:any
}


export default function DisplayState(props: DisplayStateProps) {

    function operacao(op:number) {
        let c = props.valor
        if(c>0 && op == -1){
            c--
        }else if(op == 1){
            c++
        }

        props.fvalor(c)
    }
    return (
        <div className="flex flex-col p-5 rounded-md bg-blue-500 justify-center items-center w-[300px]">
            <div className="flex bg text-gray-950 justify-center mb-3">
                {props.valor}
            </div>
            <div className="flex gap-3">
                <button className="btnPadrao" onClick={()=>operacao(-1)}>sub</button>
                <button className="btnPadrao" onClick={()=>operacao(1)}>add</button>
            </div>
        </div>
    )
}