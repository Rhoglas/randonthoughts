import React, { useState } from "react";
import { api2 } from "../../../API/apianime";

const SearchAnime = () => {
  // verificação de inputs
  const [inputValue1, setInputValue1] = useState("");
  // valores da api
  const [title1, setTitle1] = useState("");
  //   Checa o valor dos inputs
  const inputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  // consome as apis e retorna os dados solicitados
  const handleInput1 = async () => {
    try {
      const res2 = await api2.get(`/anime?title=${inputValue1}`);

      setTitle1(res2.data);
      console.log(res2);
    } catch (error) {
      console.log(error);
      console.error(error.response);
      if (error.response.status === 400) {
        alert(
          `Erro encontrado, preencha os campos necessários antes de gerar : ${error.response.status}`
        );
      } else if (error.response.status === 404) {
        alert(`Não foi possível encontrar o animes : ${error.response.status}`);
      } else {
        alert(`Erro encontrado : ${error.response.status}`);
      }
    }
  };

  return (
    <div className='cont-anime'>
      <div className='cont-search'>
        <input
          className='search-anime'
          type='text'
          value={inputValue1}
          onChange={inputChange1}
          placeholder='Anime'
        />
        <button onClick={handleInput1}>Gerar</button>
      </div>
      <div className='details'>
        <h3 className='title-default'>
          Anime: <p>{title1.anime}</p>
        </h3>
        <h3 className='title-default'>
          Personagem: <p>{title1.character}</p>
        </h3>
        <h3 className='title-default'>
          Citação: <p>{title1.quote}</p>
        </h3>
      </div>
    </div>
  );
};

export default SearchAnime;
