 
import Cabecalho from './componentes/Cabecalho';
import Container from './componentes/Container';
import Empresas from './componentes/Empresas';
import Localizacao from './componentes/Localizacao';
import Rodape from './componentes/Rodape';
import Servicos from './componentes/Servicos';
 
 
function App() {
 
  return (
    <div> 
     <Cabecalho /> 
<main>
<Container /> 

<Servicos />
 

<Empresas/> 

<Localizacao />

</main>

<Rodape />
 
      </div>
  );
}

export default App;
  