interface CardProps {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any,
    children:any

}


export default function Card(props: CardProps) {
    return (
        <div className={`flex justify-center flex-col border-4 ${props.desconto != 0 ? 'border-blue-700' : 'border-red-700'} rounded-sm p-1`}>
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            {props.desconto != 0 ? (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Valor com Desconto: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            ) : (
                <div>Valor sem Desconto: R${props.valor}</div>
            )}
            {/* <div>
                <br />
                <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                    Comprar
                </button>
            </div> */}
        </div>
    );
}