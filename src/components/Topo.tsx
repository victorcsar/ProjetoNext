import Link from "next/link";

let titulo = 'Hellow alou world mundo'
let nome = 'Vthor'

export default function Topo() {
    return (
        <div className='flex flex-col justify-center items-center bg-gray-300 h-[130px]'>
            <div>Logo</div>
            <div className="tituloTopo">{titulo}</div>
            <div>{nome}</div>
            <nav className="flex gap-3">
                <Link href={"/"}>
                    home
                </Link>
                <Link href={
                    {
                        pathname: "/produtos/Produtos",
                        query: {
                            nome: "vthor",
                            sobrenome: "csar"
                        }
                    }
                }>
                    Produtos
                </Link>
                <Link href={"/teste/Teste"}>
                    Pag Teste
                </Link>
                <Link href={"/usestate/Usestate"}>
                    State
                </Link>
                <Link href={"/useeffect/Useeffect"}>
                    Useeffect
                </Link>
                <Link href={"/inputs/Inputs"}>
                    Inputs
                </Link>
                <Link href={"/filtragem/Filtragem"}>
                    Filtagem
                </Link>
            </nav>
        </div>
    );
}
