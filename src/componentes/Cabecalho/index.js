import "./Cabecalho.css";  
import logo from "../../assets/logo-penso.svg"   
   

export default function Cabecalho(){
  
    return (
 
        <header className="cabecalho">
        <img src='https://www.penso.com.br/wp-content/uploads/2021/12/logo-penso.svg' alt="Logo da Penso Tecnologia"/>
        <nav className="cabecalho__navegacao">
            <ul className="cabecalho__lista">
                <li className="cabecalho__item"><a className="cabecalho__link" href="#">A penso</a></li>
                <li className="cabecalho__item"><a className="cabecalho__link" href="#">Blog</a></li>
                <li className="cabecalho__item"><a className="cabecalho__link" href="#">Fale Conosco</a></li>
                <li className="cabecalho__item"><a className="cabecalho__link" href="#">Seja um parceiro</a></li>
            </ul>
        </nav> 
    </header>   
    ) 
}
