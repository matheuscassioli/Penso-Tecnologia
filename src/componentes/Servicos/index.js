import "./Servicos.css";   

export default function Servicos(){
  
    return (
         <section className="servicos">
        <h2 className="servicos__titulo">Conheça alguns de nossos serviços</h2>

        <ul className="servicos__conteudo">
            <li className="servicos__itens">
                        <h4>Computação em Nuvem</h4> 
                        <p>Penso Cloud Corporativo</p>
                        <p>Penso Vbox - Armazenamento na Nuvem</p>
            </li>
            <li className="servicos__itens"> 
                        <h4>Cyber Segurança</h4>
                        <p>Fortinet</p>
                        <p>Kaspersky</p>    
                        <p>Pentest</p>

            </li>
            <li className="servicos__itens">
                        <h4>Proteção de Dados</h4>
                        <p>Veeam Backup</p>
                        <p>Veeam Disaster Recovery</p>
                        <p>Penso Backup na Nuvem</p>
                        <p>Assessment LGPD</p>
            </li>
 
            <li className="servicos__itens">
                        <h4>Comunicação e Colaboração</h4>
                        <p>Zimbra</p>
                        <p>Penso Mail Exchange</p>
                        <p>Penso Antispam</p>
                        <p>Auditoria de E-mail</p>
            </li>
            <li className="servicos__itens">
                        <h4>Serviços de TI</h4>
                        <p>Suporte de TI</p>
                        <p>Terceirização de TI</p>
                        <p>Empresa de TI</p>
                        <p>Gestão de TI</p>
            </li>  
        </ul>

         </section>
    ) 
}