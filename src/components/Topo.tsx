

let titulo = 'Hellow alou world mundo'
let nome = 'Vthor'

export default function Topo(){
    return(
        <div className='flex flex-col justify-center items-center bg-gray-300 h-[100px]'>
            <div>Logo</div>
            <div className="tituloTopo">{titulo}</div>
            <div>{nome}</div>
        </div>
    );
}
