import React, { useState } from "react";
import { api3 } from "../../../API/apianime";

const SearchPerson = () => {
  const [inputValue2, setInputValue2] = useState("");
  const [title2, setTitle2] = useState("");

  const inputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleInput2 = async () => {
    try {
      const res3 = await api3.get(`/character?name=${inputValue2}`);
      setTitle2(res3.data);
      console.log(res3);
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
          value={inputValue2}
          onChange={inputChange2}
          placeholder='Anime'
        />
        <button onClick={handleInput2}>Gerar</button>
      </div>
      <div className='details'>
        <h3 className='title-default'>
          Anime: <p>{title2.anime}</p>
        </h3>
        <h3 className='title-default'>
          Personagem: <p>{title2.character}</p>
        </h3>
        <h3 className='title-default'>
          Citação: <p>{title2.quote}</p>
        </h3>
      </div>
    </div>
  );
};

export default SearchPerson;
