  import "./Container.css";
  import React, {
      useEffect,
      useState
  } from 'react'
  
  import axios from 'axios'
  import  nome from "../../assets/name.png"
  import emailpessoa from "../../assets/email.png"
  import rua from "../../assets/rua.png"
  import predio from "../../assets/predio.png"
  import localizacao from "../../assets/localizacao.png"
  import zipcode from "../../assets/zipcode.png" 

  export default function Container() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setDados(response.data)
            }).catch(() => {
                console.log('deu errado')
            })
    }, []); 


  dados.splice(5,10); //remove os 5 ultimos itens do array
  dados.sort(function (a, b) { //organiza os em ordem ascendente

    
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

return( 
<section className="container">
      <ul className="container__lista"> 

      {dados.map((dado, key) => {
          return ( 
            <li key={key} className="container__item">
            <p className="container__item--nome"><img className="container__img" src={nome} />  {dado.name}</p>
            <p className="container__item--email"><img className="container__img" src={emailpessoa} /> {dado.email}</p>
            <p className="container__item--rua"><img className="container__img" src={rua} /> {dado.address.street}</p>
            <p className="container__item--apto"><img className="container__img" src={predio} /> {dado.address.suite}</p>
            <p className="container__item--cidade"><img className="container__img" src={localizacao} /> {dado.address.city}</p> 
            <p className="container__item--cep"><img className="container__img" src={zipcode} /> {dado.address.zipcode}</p>
          
            </li>
          )
      })
      }
      </ul>
  </section> 
)

  }
 