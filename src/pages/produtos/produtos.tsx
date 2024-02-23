import Card from "@/components/Card";
import Topo from "@/components/Topo";

function calcDesc(v: number, d: number) {
    const result = v - d;
    return result.toFixed(2).replace(".", ",");
}

const produtos = [
    {
        produto: 'Mouse',
        valor: 50.00,
        desconto: 0,
        disponivel: true,
        quantidade: 50
    },
    {
        produto: 'Teclado',
        valor: 119.90,
        desconto: 10,
        disponivel: false,
        quantidade: 50
    },
    {
        produto: 'Monitor',
        valor: 900.50,
        desconto: 20.35,
        disponivel: true,
        quantidade: 50
    },
    {
        produto: 'Headset',
        valor: 150.99,
        desconto: 35,
        disponivel: true,
        quantidade: 50
    }
]


export default function produtosPagina() {
    <div>
        <Topo />

        <div className='flex justify-center gap-6'>
            {
                produtos.map((e: any, index) => {
                    if (e.disponivel) {
                        return (
                            <Card key={index} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc} />
                        )
                    }
                })
            }
        </div>
    </div>
}