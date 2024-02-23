import Topo from "@/components/Topo";
import produtosPagina from "./produtos/produtos";




export default function Home() {
  return (
    <main>
      <div>
        <Topo />
        <div style={subtext}>Curso de react next</div>
        <br />
        
      </div>
    </main>
  );
}

const subtext = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}

