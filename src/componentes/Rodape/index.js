import "./Rodape.css"; 

import linkedin from "../../assets/linkedin-white.png"

export default function Rodape(){
  
    return (
        <footer className="rodape">  
    <p className="rodape__penso"> <span>Penso Tecnologia</span> - Todos os direitos reservados © 2022 </p>
    <p className="rodape__matheus">Coded by <a href="https://www.linkedin.com/in/matheuscss/" target='_blank'>Matheus Cassioli <img alt='ícone do linkedin' src={linkedin}/></a></p>
 </footer>
    ) 
}
