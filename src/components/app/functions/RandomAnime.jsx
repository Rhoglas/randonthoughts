import React, { useEffect, useState } from "react";
import { api } from "../../../API/apianime";

const randomAnime = () => {
  const [frase, setFrase] = useState([]);

  useEffect(() => {
    console.log("oi");
    async function dataAnimes() {
      try {
        const anime = await api.get("/random");
        console.log(anime);

        setFrase(anime.data);
      } catch (error) {
        console.error(error);
      }
    }
    dataAnimes();
  }, []);

  return (
    <>
      <h1>Anime : {frase.anime}</h1>
      <p>Character: {frase.character}</p>
      <i>Citation : {frase.quote}</i>
    </>
  );
};

export default randomAnime;
