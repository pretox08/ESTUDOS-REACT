import './App.scss';
import axios from 'axios';
import { useState } from 'react';

export function App() {

  const[filme, setFilme] = useState('');
  const[listafilmes, setFilmes] = useState([]);

  async function buscar() {
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=e3729b5d&S=' + filme;
  
    let response = await axios.get(url);
    setFilmes(response.data.Search);
  }

  return (
    <div className="pagina-imdb">
      <div className='portifolio'>
        <img src='./assets/images/cabecalho.png'></img>
      </div>

      <div className='ilustracao'>
        <div className='titulo'>
          <h1>IMDB</h1>
        </div>
      </div>

      <div className='conteudo'>
        <h2>Consulta de Filmes</h2>

        <div className='procurar-filme'>
          <h6>nome</h6>
          <input type='text' value={filme} onChange={e => setFilme(e.target.value)}></input>
          <button onClick={buscar}>
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1734 16.29L15.4925 12.9C16.6801 11.5025 17.3245 9.77666 17.3221 8C17.3221 6.41775 16.8142 4.87103 15.8625 3.55544C14.9108 2.23985 13.5581 1.21447 11.9755 0.608967C10.3929 0.00346625 8.65146 -0.15496 6.97138 0.153721C5.2913 0.462403 3.74804 1.22433 2.53677 2.34315C1.3255 3.46197 0.500613 4.88743 0.166424 6.43928C-0.167765 7.99113 0.00375268 9.59966 0.659288 11.0615C1.31482 12.5233 2.42493 13.7727 3.84924 14.6518C5.27354 15.5308 6.94807 16 8.66107 16C10.5845 16.0022 12.4529 15.407 13.966 14.31L17.6361 17.71C17.7367 17.8037 17.8565 17.8781 17.9884 17.9289C18.1203 17.9797 18.2618 18.0058 18.4048 18.0058C18.5477 18.0058 18.6892 17.9797 18.8211 17.9289C18.9531 17.8781 19.0728 17.8037 19.1734 17.71C19.2749 17.617 19.3555 17.5064 19.4104 17.3846C19.4654 17.2627 19.4937 17.132 19.4937 17C19.4937 16.868 19.4654 16.7373 19.4104 16.6154C19.3555 16.4936 19.2749 16.383 19.1734 16.29ZM2.16527 8C2.16527 6.81332 2.54624 5.65328 3.26001 4.66658C3.97378 3.67989 4.98828 2.91085 6.17523 2.45673C7.36219 2.0026 8.66827 1.88378 9.92834 2.11529C11.1884 2.3468 12.3458 2.91825 13.2543 3.75736C14.1627 4.59648 14.7814 5.66558 15.0321 6.82946C15.2827 7.99335 15.1541 9.19975 14.6624 10.2961C14.1708 11.3925 13.3382 12.3295 12.2699 12.9888C11.2017 13.6481 9.94582 14 8.66107 14C6.93828 14 5.28604 13.3679 4.06785 12.2426C2.84965 11.1174 2.16527 9.5913 2.16527 8Z" fill="#C5BC4D"/>
                </svg>
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Ano</th>
            </tr>
          </thead>

          <tbody>
              {listafilmes.map(e =>
              <tr className='celulas-filmes'>
                <td><b>{e.imdbID}</b></td>
                <td className='titulo-filme'>{e.Title}</td>
                <td className='ano'>{e.Year}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
