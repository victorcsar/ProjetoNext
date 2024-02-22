import Topo from "@/components/Topo";
import Card from "@/components/Card";


function calcDesc(v:number,d:number){
  return v-d;

}

export default function Home() {
  return (
    <main>
      <div>
        <Topo />
        <div style={subtext}>Curso de react next</div>
        <br />
        <div className='flex justify-center gap-6'>
          <Card produto={'teclado'} valor={50.00} desconto={10} funcao={calcDesc}/>
          <Card produto={'mouse'} valor={20.00} desconto={0} funcao={calcDesc}/>
          <Card produto={'tela'} valor={500.00} desconto={20} funcao={calcDesc}/>
        </div>
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

