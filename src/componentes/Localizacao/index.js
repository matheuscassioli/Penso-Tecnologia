import "./Localizacao.css" 

export default function Localizacao(){

    return (
        <section className="localizacao">

        <div className="localizacao__img">
            <img className="localizacao__img--logo" src={'https://www.penso.com.br/wp-content/uploads/2021/12/logo-penso.svg'}   alt="Logo da Penso Tecnologia" /> 
            <div className="localizacao__img--redes">
                <a target="_blank" href="https://www.linkedin.com/company/penso-tecnologia/">
                    <div className="localizacao__img--redes-linkedin div-rede"></div>
                </a>
                <a target="_blank" href="https://www.youtube.com/c/PensoTecnologiaOficial">
                    <div className="localizacao__img--redes-youtube div-rede"></div>
                </a>
                <a target="_blank" href="https://pt-br.facebook.com/pensotecnologia/">
                    <div className="localizacao__img--redes-facebook div-rede"></div>
                </a>
                <a target="_blank" href="https://www.instagram.com/pensotecnologia/">
                    <div className="localizacao__img--redes-instagram div-rede"></div>
                </a>
            </div>
        </div>
 

        <div className="localizacao__contato">
            <div className="localizacao__contato--endereco">
                <p>Alameda Campinas, 977 - 10º andar</p>
                <p>Jardins - São Paulo - SP</p>
                <p>Contato: (11) 3515-1818</p>
                <p>contato@penso.com.br</p>
            </div>
            </div>
            

</section> 
    )
}