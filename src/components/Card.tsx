interface CardProps {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any

}


export default function Card(props: CardProps) {
    return (
        <div className="flex flex-col border border-red-700 rounded-sm p-1">
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            <div>Desconto: R${props.desconto}</div>
            <div>Valor com Desconto: R${props.funcao(props.valor, props.desconto)}</div>
        </div>
    );
}